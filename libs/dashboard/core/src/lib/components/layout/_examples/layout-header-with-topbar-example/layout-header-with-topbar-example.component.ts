import { Component } from '@angular/core';
import {
  AnnouncementComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutTopbarComponent
} from '@core/components';

@Component({
  selector: 'app-layout-header-with-topbar-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    AnnouncementComponent,
  ],
  templateUrl: './layout-header-with-topbar-example.component.html',
  styleUrl: './layout-header-with-topbar-example.component.scss',
})
export class LayoutHeaderWithTopbarExampleComponent {}
