import { Component } from '@angular/core';
import {
  BasicTreeExampleComponent,
  PageComponent,
  PlaygroundComponent,
  TreeWithDynamicDataExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicTreeExampleComponent,
    TreeWithDynamicDataExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './tree-overview.component.html',
  styleUrl: './tree-overview.component.scss'
})
export class TreeOverviewComponent {

}
