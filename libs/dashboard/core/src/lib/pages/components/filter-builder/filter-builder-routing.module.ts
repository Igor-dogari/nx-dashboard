import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Filter Builder',
    loadComponent: () => import('./overview/filter-builder-overview.component').then(c => c.FilterBuilderOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterBuilderRoutingModule { }
