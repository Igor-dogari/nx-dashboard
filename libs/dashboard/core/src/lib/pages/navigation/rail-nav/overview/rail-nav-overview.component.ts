import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicRailNavExampleComponent } from '@core';
import {
  RailNavCustomizationExampleComponent
} from '@core';

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
