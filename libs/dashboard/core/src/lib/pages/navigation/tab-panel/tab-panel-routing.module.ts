import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Tab Panel',
    loadComponent: () => import('./overview/tab-panel-overview.component').then(c => c.TabPanelOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPanelRoutingModule { }
