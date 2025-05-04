import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTreeExampleComponent } from '@core/pages';
import {
  TreeWithDynamicDataExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
