import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import {
  HorizontalDividerComponent,
  IconComponent,
  TabPanelAsideComponent,
  TabPanelBodyComponent,
  TabPanelComponent,
  TabPanelCustomItemComponent,
  TabPanelFooterComponent,
  TabPanelHeaderComponent,
  TabPanelItemComponent,
  TabPanelNavComponent,
} from '@core/components';
import { TabPanelAsideContentDirective, TabPanelItemIconDirective } from '@core/directives';
import { AvatarComponent } from '@core/components';

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
