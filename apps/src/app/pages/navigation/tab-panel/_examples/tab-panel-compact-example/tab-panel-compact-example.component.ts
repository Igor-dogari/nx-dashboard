import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import {
  AvatarComponent,
  HorizontalDividerComponent,
  IconComponent,
  TabPanelAsideComponent,
  TabPanelAsideContentDirective,
  TabPanelBodyComponent,
  TabPanelComponent,
  TabPanelCustomItemComponent,
  TabPanelFooterComponent,
  TabPanelHeaderComponent,
  TabPanelItemComponent,
  TabPanelItemIconDirective,
  TabPanelNavComponent,
} from '@core';

@Component({
  selector: 'app-tab-panel-compact-example',
  imports: [
    IconComponent,
    MatTooltip,
    HorizontalDividerComponent,
    AvatarComponent,
    TabPanelItemIconDirective,
    TabPanelItemComponent,
    TabPanelCustomItemComponent,
    TabPanelAsideContentDirective,
    TabPanelAsideComponent,
    TabPanelNavComponent,
    TabPanelFooterComponent,
    TabPanelBodyComponent,
    TabPanelHeaderComponent,
    TabPanelComponent,
  ],
  templateUrl: './tab-panel-compact-example.component.html',
  styleUrl: './tab-panel-compact-example.component.scss',
})
export class TabPanelCompactExampleComponent {}
