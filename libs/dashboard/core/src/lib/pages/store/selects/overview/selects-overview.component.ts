import { Component } from '@angular/core';
import { WorkspaceSelectExampleComponent } from '../_examples/workspace-select-example/workspace-select-example.component';
import { PageComponent, PageContentDirective, PlaygroundComponent } from '@core';

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
