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
// import { HeaderComponent } from '../header/header.component';
// import { LibSidebarComponent } from '../lib-sidebar/lib-sidebar.component';
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
export class EmrCommonComponent implements OnInit {

  constructor() {
    console.log("=>(emr-common.component.ts:5) AnnouncementGlobalComponent", AnnouncementGlobalComponent);
    console.log("=>(emr-common.component.ts:7) IncidentsContainerComponent", IncidentsContainerComponent);
    console.log("=>(emr-common.component.ts:9) LayoutBodyComponent", LayoutBodyComponent);
    console.log("=>(emr-common.component.ts:11) LayoutComponent", LayoutComponent);
    console.log("=>(emr-common.component.ts:13) LayoutHeaderComponent", LayoutHeaderComponent);
    console.log("=>(emr-common.component.ts:15) LayoutSidebarComponent", LayoutSidebarComponent);
    console.log("=>(emr-common.component.ts:17) LayoutTopbarComponent", LayoutTopbarComponent);

  }

  ngOnInit(): void {
    console.log("=>(emr-common.component.ts:37) ngOnInit");
  }
}
