import { Component } from '@angular/core';

@Component({
  selector: 'emr-layout-header',
  exportAs: 'emrLayoutHeader',
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
  standalone: true,
  host: {
    class: 'emr-layout-header',
  },
})
export class LayoutHeaderComponent {}
