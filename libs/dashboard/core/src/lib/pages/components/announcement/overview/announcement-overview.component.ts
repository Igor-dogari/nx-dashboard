import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicAnnouncementExampleComponent
} from '../_examples/basic-announcement-example/basic-announcement-example.component';
import {
  AnnouncementWithIconsExampleComponent
} from '../_examples/announcement-with-icons-example/announcement-with-icons-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  ShowHideAnnouncementDynamicallyComponent
} from '../_examples/show-hide-announcement-dynamically/show-hide-announcement-dynamically.component';
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
