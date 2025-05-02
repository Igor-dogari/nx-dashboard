import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicCardExampleComponent } from '../_examples/basic-card-example/basic-card-example.component';
import { CardActionsExampleComponent } from '../_examples/card-actions-example/card-actions-example.component';
import {
  CardMultipleSectionsExampleComponent
} from '../_examples/card-multiple-sections-example/card-multiple-sections-example.component';
import {
  CardFooterLoadingExampleComponent
} from '../_examples/card-footer-loading-example/card-footer-loading-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicCardExampleComponent,
        CardActionsExampleComponent,
        CardMultipleSectionsExampleComponent,
        CardFooterLoadingExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './card-overview.component.html',
    styleUrl: './card-overview.component.scss'
})
export class CardOverviewComponent {

}
