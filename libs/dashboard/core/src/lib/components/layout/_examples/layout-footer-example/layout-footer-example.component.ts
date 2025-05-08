import { Component } from '@angular/core';
import { LayoutBodyComponent, LayoutComponent, LayoutFooterComponent } from '@core/components';

@Component({
  selector: 'app-layout-footer-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutFooterComponent
  ],
  templateUrl: './layout-footer-example.component.html',
  styleUrl: './layout-footer-example.component.scss'
})
export class LayoutFooterExampleComponent {

}
