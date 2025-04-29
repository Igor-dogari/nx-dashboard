import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Snackbar',
    loadComponent: () => import('./overview/snackbar-overview.component').then(c => c.SnackbarOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackbarRoutingModule { }
