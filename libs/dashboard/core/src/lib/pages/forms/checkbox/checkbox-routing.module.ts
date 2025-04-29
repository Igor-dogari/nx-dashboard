import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Checkbox',
    loadComponent: () => import('./overview/checkbox-overview.component').then(c => c.CheckboxOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxRoutingModule { }
