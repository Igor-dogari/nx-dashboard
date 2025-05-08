import { Component } from '@angular/core';
import { LayoutBodyComponent, LayoutComponent, LayoutHeaderComponent } from '@core/components';

@Component({
  selector: 'app-layout-header-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
  ],
  templateUrl: './layout-header-example.component.html',
  styleUrl: './layout-header-example.component.scss'
})
export class LayoutHeaderExampleComponent {

}
