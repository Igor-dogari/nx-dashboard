import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared';
import { LibSidebarComponent } from '@shared';
import {
  AnnouncementGlobalComponent,
  IncidentsContainerComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
} from '@core';

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
  templateUrl: './common.component.html',
})
export class CommonComponent {}
