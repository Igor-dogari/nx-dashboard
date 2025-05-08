import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AnnouncementGlobalComponent,
  HeaderComponent,
  // IncidentsContainerComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
  LibSidebarComponent,
} from '@core/components';
import { IncidentsContainerComponent } from 'libs/dashboard/core/src/lib/components/incidents/incidents-container/incidents-container.component';

@Component({
  imports: [
    RouterOutlet,
    // HeaderComponent,
    // LibSidebarComponent,
    // LayoutComponent,
    // LayoutBodyComponent,
    // LayoutSidebarComponent,
    // LayoutHeaderComponent,
    // LayoutTopbarComponent,
    IncidentsContainerComponent,
    AnnouncementGlobalComponent,
  ],
  templateUrl: './emr-common.component.html',
  standalone: true,
})
export class EmrCommonComponent {
  constructor() {
    console.log('=>(emr-common.component.ts:34) ');
  }
}
