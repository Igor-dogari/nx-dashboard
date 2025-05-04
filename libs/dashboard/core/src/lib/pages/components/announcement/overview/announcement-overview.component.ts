import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicAnnouncementExampleComponent
} from '@core/pages';
import {
  AnnouncementWithIconsExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  ShowHideAnnouncementDynamicallyComponent
} from '@core/pages';
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
