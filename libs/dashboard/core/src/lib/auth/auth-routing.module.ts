import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('@core').then(c => c.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('@core').then(c => c.SignupComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('@core').then(c => c.ForgotPasswordComponent)
  },
  {
    path: 'password-reset',
    loadComponent: () => import('@core').then(c => c.PasswordResetComponent)
  },
  {
    path: 'set-new-password',
    loadComponent: () => import('@core').then(c => c.SetNewPasswordComponent)
  },
  {
    path: 'done',
    loadComponent: () => import('@core').then(c => c.DoneComponent)
  },
  {
    path: 'create-account',
    loadComponent: () => import('@core').then(c => c.CreateAccountComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
