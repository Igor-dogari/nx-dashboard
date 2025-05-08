import { Component } from '@angular/core';

@Component({
  selector: 'emr-sidebar-nav-heading',
  exportAs: 'emrSidebarNavHeading',
  imports: [],
  templateUrl: './sidebar-nav-heading.component.html',
  styleUrl: './sidebar-nav-heading.component.scss',
  standalone: true,
  host: {
    class: 'emr-sidebar-nav-heading',
  },
})
export class SidebarNavHeadingComponent {}
