import { Component } from '@angular/core';
import {
  LayoutAsideComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutSidebarComponent
} from '@core/components';

@Component({
  selector: 'app-layout-aside-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutAsideComponent
  ],
  templateUrl: './layout-aside-example.component.html',
  styleUrl: './layout-aside-example.component.scss'
})
export class LayoutAsideExampleComponent {

}
