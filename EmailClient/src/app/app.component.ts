import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    this.subManager.add(
      this.authService.checkAuth().subscribe({
        error: () => {
          this.signedin$.next(false);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
