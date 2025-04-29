import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Bottom Sheet',
    loadComponent: () => import('./overview/bottom-sheet-overview.component').then(c => c.BottomSheetOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomSheetRoutingModule { }
