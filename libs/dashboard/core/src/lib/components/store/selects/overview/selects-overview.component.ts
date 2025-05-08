import { Component } from '@angular/core';
import { PageComponent, PlaygroundComponent, WorkspaceSelectExampleComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
