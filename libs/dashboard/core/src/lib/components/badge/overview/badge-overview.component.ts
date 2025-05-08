import { Component } from '@angular/core';
import { BasicBadgesExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
