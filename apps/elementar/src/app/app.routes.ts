import { Routes } from '@angular/router';
import { libAuthGuard } from '@core';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'pages/dashboard/basic',
    redirectTo: 'auth/signup',
    pathMatch: 'full'
  },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('@core').then(m => m.PagesModule),
  //   // canActivate: [libAuthGuard]
  // },
  {
    path: 'auth',
    loadChildren: () => import('@core').then(m => m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('@core').then(m => m.ErrorModule)
  },
  // {
  //   path: '**',
  //   title: 'Page Not Found',
  //   loadComponent: () => import('@core').then(c => c.NotFoundComponent)
  // }
];
