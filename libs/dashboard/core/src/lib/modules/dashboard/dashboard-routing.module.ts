import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { MyProfileComponent } from '@core/components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    // path: 'profile',
    path: 'basic',
    component: MyProfileComponent,
    // canActivate: [authGuardFn],
  },
  // {
  //   path: 'basic',
  //   title: 'Basic Dashboard',
  //   loadComponent: () =>
  //     import('@core/components').then((c) => c.DashboardBasicComponent),
  // },
  // {
  //   path: 'ecommerce',
  //   title: 'Ecommerce Dashboard',
  //   loadComponent: () =>
  //     import('@core/components').then((c) => c.EcommerceComponent),
  // },
  // {
  //   path: 'finance',
  //   title: 'Finance Dashboard',
  //   loadComponent: () => import('@core/components').then((c) => c.FinanceComponent),
  // },
  // {
  //   path: 'explore',
  //   title: 'Explore Dashboard',
  //   loadComponent: () => import('@core/components').then((c) => c.ExploreComponent),
  // },
  // {
  //   path: 'ecommerce',
  //   title: 'Ecommerce Dashboard',
  //   loadComponent: () =>
  //     import('@core/components').then((c) => c.EcommerceComponent),
  // },
  // {
  //   path: 'finance',
  //   title: 'Finance Dashboard',
  //   loadComponent: () => import('@core/components').then((c) => c.FinanceComponent),
  // },
  // {
  //   path: 'explore',
  //   title: 'Explore Dashboard',
  //   loadComponent: () => import('@core/components').then((c) => c.ExploreComponent),
  // },
  // {
  //   path: 'analytics',
  //   title: 'Analytics',
  //   loadComponent: () =>
  //     import('@core/components').then((c) => c.AnalyticsComponent),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
