import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Password Strength',
    loadComponent: () => import('./overview/password-strength-overview.component').then(c => c.PasswordStrengthOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordStrengthRoutingModule { }
