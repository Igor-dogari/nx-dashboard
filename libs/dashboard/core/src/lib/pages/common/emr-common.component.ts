import { Component, OnInit } from '@angular/core';
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
import { HeaderComponent } from '../header/header.component';
import { LibSidebarComponent } from '../lib-sidebar/lib-sidebar.component';
// import { HeaderComponent, LibSidebarComponent } from '@core/pages';

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
export class EmrCommonComponent implements OnInit {

  constructor() {
    console.log("=>(emr-common.component.ts:33) constructor");
  }

  ngOnInit(): void {
    console.log("=>(emr-common.component.ts:37) ngOnInit");
  }
}
