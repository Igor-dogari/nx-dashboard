import { Component } from '@angular/core';
import { TAB_PANEL_ASIDE } from '@core/models';

@Component({
  selector: 'emr-tab-panel-aside',
  exportAs: 'emrTabPanelAside',
  templateUrl: './tab-panel-aside.component.html',
  styleUrl: './tab-panel-aside.component.scss',
  providers: [
    {
      provide: TAB_PANEL_ASIDE,
      useExisting: TabPanelAsideComponent
    }
  ],
  host: {
    'class': 'emr-tab-panel-aside'
  }
})
export class TabPanelAsideComponent {
  nextId = 0;
}
