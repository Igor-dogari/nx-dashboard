import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  PanelBodyComponent,
  PanelComponent,
  PanelFooterComponent,
  PanelHeaderComponent,
  TabPanelAsideComponent,
  TabPanelBodyComponent, TabPanelComponent,
  TabPanelItemComponent,
  TabPanelItemTextComponent,
  TabPanelNavComponent
} from '@core/components';
import { TabPanelAsideContentDirective, TabPanelItemIconDirective } from '@core/directives';

@Component({
  selector: 'app-tab-panel-with-panels-inside-example',
  imports: [
    MatIcon,
    TabPanelItemIconDirective,
    TabPanelItemTextComponent,
    TabPanelItemComponent,
    TabPanelAsideContentDirective,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent,
    PanelComponent,
    TabPanelAsideComponent,
    TabPanelNavComponent,
    TabPanelBodyComponent,
    TabPanelComponent
  ],
  templateUrl: './tab-panel-with-panels-inside-example.component.html',
  styleUrl: './tab-panel-with-panels-inside-example.component.scss'
})
export class TabPanelWithPanelsInsideExampleComponent {

}
