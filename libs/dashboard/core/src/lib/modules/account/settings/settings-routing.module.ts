import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@core/components').then(c => c.AppCommonComponent),
    children: [
      {
        path: 'my-profile',
        title: 'My Profile',
        loadComponent: () => import('@core/components').then(c => c.MyProfileComponent),
      },
      {
        path: 'security',
        title: 'Security',
        loadComponent: () => import('@core/components').then(c => c.SecurityComponent),
      },
      {
        path: 'notifications',
        title: 'Notifications',
        loadComponent: () => import('@core/components').then(c => c.SettingsNotificationsComponent),
      },
      {
        path: 'billing',
        title: 'Billing',
        loadComponent: () => import('@core/components').then(c => c.BillingComponent),
      },
      {
        path: 'data-export',
        title: 'Data Export',
        loadComponent: () => import('@core/components').then(c => c.DataExportComponent),
      },
      {
        path: 'sessions',
        title: 'Sessions',
        loadComponent: () => import('@core/components').then(c => c.SessionsComponent),
      },
      {
        path: 'cookie',
        title: 'Cookie',
        loadComponent: () => import('@core/components').then(c => c.CookieComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-profile'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
