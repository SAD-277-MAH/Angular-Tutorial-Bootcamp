import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { authenticatedUserGuard } from './authenticated-user.guard';

const routes: Routes = [
  {
    path: 'signout',
    component: SignoutComponent,
  },
  {
    path: 'signup',
    canActivate: [authenticatedUserGuard],
    component: SignupComponent,
  },
  {
    path: '',
    canActivate: [authenticatedUserGuard],
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
