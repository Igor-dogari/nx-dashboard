import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicBadgesExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  imports: [
    PlaygroundComponent,
    BasicBadgesExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './badge-overview.component.html',
  styleUrl: './badge-overview.component.scss'
})
export class BadgeOverviewComponent {

}
