import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css',
})
export class SignoutComponent implements OnInit, OnDestroy {
  subManager = new Subscription();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subManager.add(
      this.authService.signout().subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 3000);
      })
    );
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
