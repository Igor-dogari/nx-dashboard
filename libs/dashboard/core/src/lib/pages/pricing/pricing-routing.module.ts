import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pricing',
    loadComponent: () => import('./basic/pricing-basic.component').then(c => c.PricingBasicComponent)
  },
  {
    path: 'membership-plans',
    title: 'Membership plans',
    loadComponent: () => import('./membership-plans/membership-plans.component').then(c => c.MembershipPlansComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
