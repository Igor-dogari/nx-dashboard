import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AnnouncementGlobalComponent,
  IncidentsContainerComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
} from '@core';
import { HeaderComponent, LibSidebarComponent } from '@core/pages';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    LibSidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    IncidentsContainerComponent,
    AnnouncementGlobalComponent,
  ],
  templateUrl: './emr-common.component.html',
  standalone: true,
})
export class EmrCommonComponent {}
