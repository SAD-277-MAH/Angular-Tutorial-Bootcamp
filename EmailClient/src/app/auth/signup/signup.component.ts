import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatchPassword } from '../validators/match-password';
import { UsernameAvailable } from '../validators/username-available';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnDestroy {
  subManager = new Subscription();

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.usernameAvailable.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private matchPassword: MatchPassword,
    private usernameAvailable: UsernameAvailable
  ) {}

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
      passwordConfirmation: this.authForm.value!.passwordConfirmation!,
    };
    this.isLoading$.next(true);
    this.subManager.add(
      this.authService.signup(request).subscribe({
        next: (value) => {
          this.isLoading$.next(false);
          this.router.navigateByUrl('/inbox');
        },
        error: (err) => {
          this.isLoading$.next(false);
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
          } else {
            this.authForm.setErrors({ unhandledException: true });
          }
        },
      })
    );
  }

  showErrors() {
    return (
      this.authForm.controls.password.touched &&
      this.authForm.controls.password.dirty &&
      this.authForm.controls.passwordConfirmation.touched &&
      this.authForm.controls.passwordConfirmation.dirty &&
      this.authForm.errors
    );
  }

  disabledSubmit() {
    return (
      !this.authForm.valid &&
      this.authForm.errors &&
      !(
        this.authForm.errors!['noConnection'] |
        this.authForm.errors!['unhandledException']
      )
    );
  }
}
