import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicIncidentsExampleComponent } from '../_examples/basic-incidents-example/basic-incidents-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import {
  IncidentsShowHideDynamiclyExampleComponent
} from '../_examples/incidents-show-hide-dynamicly-example/incidents-show-hide-dynamicly-example.component';

@Component({
  imports: [
    PlaygroundComponent,
    BasicIncidentsExampleComponent,
    PageComponent,
    PageContentDirective,
    IncidentsShowHideDynamiclyExampleComponent
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
