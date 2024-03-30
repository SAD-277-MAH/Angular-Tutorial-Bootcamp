import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnDestroy {
  subManager = new Subscription();

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  onSubmit() {
    if (this.disabledSubmit()) {
      return;
    }

    const request = {
      username: this.authForm.value!.username!,
      password: this.authForm.value!.password!,
    };
    this.isLoading$.next(true);
    this.subManager.add(
      this.authService.signin(request).subscribe({
        next: (value) => {
          this.isLoading$.next(false);
          this.router.navigateByUrl('/inbox');
        },
        error: (err) => {
          this.isLoading$.next(false);
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
          } else if (err.status && err.status === 422) {
            this.authForm.setErrors({ signinFailed: true });
          } else {
            this.authForm.setErrors({ unhandledException: true });
          }
        },
      })
    );
  }

  disabledSubmit() {
    return (
      !this.authForm.valid &&
      this.authForm.errors &&
      !(
        this.authForm.errors!['signinFailed'] |
        this.authForm.errors!['noConnection'] |
        this.authForm.errors!['unhandledException']
      )
    );
  }
}
