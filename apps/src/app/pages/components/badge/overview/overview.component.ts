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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
