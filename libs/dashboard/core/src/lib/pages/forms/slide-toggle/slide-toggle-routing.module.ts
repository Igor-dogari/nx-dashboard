import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Slide Toggle',
    loadComponent: () => import('./overview/slide-toggle-overview.component').then(c => c.SlideToggleOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlideToggleRoutingModule { }
