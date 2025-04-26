import { Component } from '@angular/core';

@Component({
  selector: 'emr-layout-topbar',
  exportAs: 'emrLayoutTopbar',
  templateUrl: './layout-topbar.component.html',
  styleUrl: './layout-topbar.component.scss',
  standalone: true,
  host: {
    class: 'emr-layout-topbar',
  },
})
export class LayoutTopbarComponent {}
