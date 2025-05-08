import { Component } from '@angular/core';
import { PageContentDirective } from '@core/directives';
import {
  AnnouncementWithIconsExampleComponent,
  BasicAnnouncementExampleComponent, PageComponent,
  PlaygroundComponent,
  ShowHideAnnouncementDynamicallyComponent
} from '@core/components';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PlaygroundComponent,
    BasicAnnouncementExampleComponent,
    AnnouncementWithIconsExampleComponent,
    PageComponent,
    PageContentDirective,
    ShowHideAnnouncementDynamicallyComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './announcement-overview.component.html',
  styleUrl: './announcement-overview.component.scss'
})
export class AnnouncementOverviewComponent {

}
