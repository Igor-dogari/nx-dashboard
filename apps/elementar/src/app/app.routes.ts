import { Routes } from '@angular/router';
import { libAuthGuard } from '@shared';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/dashboard/basic',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('@core/pages').then(m => m.PagesModule),
    // canActivate: [libAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@core/auth').then(m => m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('@core/error').then(m => m.ErrorModule)
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('@core/error').then(c => c.NotFoundComponent)
  }
];
