import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Progress Spinner',
    loadComponent: () => import('./overview/progress-spinner-overview.component').then(c => c.ProgressSpinnerOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressSpinnerRoutingModule { }
