import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  WorkspaceSelectExampleComponent
} from '../_examples/workspace-select-example/workspace-select-example.component';

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
