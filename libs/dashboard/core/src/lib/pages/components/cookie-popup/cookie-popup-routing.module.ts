import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/cookie-popup-overview.component').then(m => m.CookiePopupOverviewComponent),
    title: 'Cookie Popup',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookiePopupRoutingModule { }
