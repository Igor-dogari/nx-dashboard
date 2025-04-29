import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicBadgesExampleComponent } from '../_examples/basic-badges-example/basic-badges-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
