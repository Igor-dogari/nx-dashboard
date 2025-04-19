import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar.component';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
} from '../../../../projects/components/layout';
import { AnnouncementGlobalComponent } from '../../../../projects/components/announcement';
import { IncidentsContainerComponent } from '../../../../projects/components/incidents';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    IncidentsContainerComponent,
    AnnouncementGlobalComponent
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {
}
