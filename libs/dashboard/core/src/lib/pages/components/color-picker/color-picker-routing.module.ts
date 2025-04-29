import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Color Picker',
    loadComponent: () => import('./overview/color-picker-overview.component').then(c => c.ColorPickerOverviewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPickerRoutingModule { }
