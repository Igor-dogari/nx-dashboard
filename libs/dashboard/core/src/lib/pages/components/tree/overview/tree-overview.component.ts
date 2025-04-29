import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicTreeExampleComponent } from '../_examples/basic-tree-example/basic-tree-example.component';
import {
  TreeWithDynamicDataExampleComponent
} from '../_examples/tree-with-dynamic-data-example/tree-with-dynamic-data-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
