import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  WorkspaceSelectExampleComponent
} from '@core';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    WorkspaceSelectExampleComponent
  ],
  templateUrl: './selects-overview.component.html',
  styleUrl: './selects-overview.component.scss'
})
export class SelectsOverviewComponent {

}
