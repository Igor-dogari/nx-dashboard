import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import { BasicRailNavExampleComponent } from '../_examples/basic-rail-nav-example/basic-rail-nav-example.component';
import {
  RailNavCustomizationExampleComponent
} from '../_examples/rail-nav-customization-example/rail-nav-customization-example.component';

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
