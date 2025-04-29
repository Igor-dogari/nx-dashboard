import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Resizable Container',
    loadComponent: () => import('./overview/resizable-container-overview.component').then(c => c.ResizableContainerOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResizableContainerRoutingModule { }
