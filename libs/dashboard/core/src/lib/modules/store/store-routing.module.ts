import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'widgets',
    loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./skeleton/store-skeleton.module').then(m => m.StoreSkeletonModule)
  },
  {
    path: 'sidebar-widgets',
    loadChildren: () => import('./sidebar-widgets/sidebar-widgets.module').then(m => m.SidebarWidgetsModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'selects',
    loadChildren: () => import('./selects/selects.module').then(m => m.SelectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
