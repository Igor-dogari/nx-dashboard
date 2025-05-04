import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { MyProfileComponent } from '@core/pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    path: 'profile',
    component: MyProfileComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'basic',
    title: 'Basic Dashboard',
    loadComponent: () =>
      import('@core/pages').then((c) => c.DashboardBasicComponent),
  },
  {
    path: 'ecommerce',
    title: 'Ecommerce Dashboard',
    loadComponent: () =>
      import('@core/pages').then((c) => c.EcommerceComponent),
  },
  {
    path: 'finance',
    title: 'Finance Dashboard',
    loadComponent: () => import('@core/pages').then((c) => c.FinanceComponent),
  },
  {
    path: 'explore',
    title: 'Explore Dashboard',
    loadComponent: () => import('@core/pages').then((c) => c.ExploreComponent),
  },
  {
    path: 'ecommerce',
    title: 'Ecommerce Dashboard',
    loadComponent: () =>
      import('@core/pages').then((c) => c.EcommerceComponent),
  },
  {
    path: 'finance',
    title: 'Finance Dashboard',
    loadComponent: () => import('@core/pages').then((c) => c.FinanceComponent),
  },
  {
    path: 'explore',
    title: 'Explore Dashboard',
    loadComponent: () => import('@core/pages').then((c) => c.ExploreComponent),
  },
  {
    path: 'analytics',
    title: 'Analytics',
    loadComponent: () =>
      import('@core/pages').then((c) => c.AnalyticsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
