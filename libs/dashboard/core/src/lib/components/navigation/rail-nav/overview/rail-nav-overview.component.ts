import { Component } from '@angular/core';
import {
  BasicRailNavExampleComponent,
  PageComponent,
  PlaygroundComponent,
  RailNavCustomizationExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        BasicRailNavExampleComponent,
        RailNavCustomizationExampleComponent
    ],
    templateUrl: './rail-nav-overview.component.html',
    styleUrl: './rail-nav-overview.component.scss'
})
export class RailNavOverviewComponent {

}
