import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Skeleton',
    loadComponent: () => import('./overview/skeleton-overview.component').then(c => c.SkeletonOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsSkeletonRoutingModule { }
