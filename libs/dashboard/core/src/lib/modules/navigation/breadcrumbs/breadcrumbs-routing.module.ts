import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Breadcrumbs',
    loadComponent: () => import('@core/components').then(c => c.BreadcrumbsOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbsRoutingModule { }
