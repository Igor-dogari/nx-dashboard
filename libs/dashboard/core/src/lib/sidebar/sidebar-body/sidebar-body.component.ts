import { Component } from '@angular/core';

@Component({
  selector: 'emr-sidebar-body',
  exportAs: 'emrSidebarBody',
  templateUrl: './sidebar-body.component.html',
  styleUrl: './sidebar-body.component.scss',
  standalone: true,
  host: {
    class: 'emr-sidebar-body',
  },
})
export class SidebarBodyComponent {}
