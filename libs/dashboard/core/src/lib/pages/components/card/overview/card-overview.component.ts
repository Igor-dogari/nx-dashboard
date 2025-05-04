import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicCardExampleComponent } from '@core/pages';
import { CardActionsExampleComponent } from '@core/pages';
import {
  CardMultipleSectionsExampleComponent
} from '@core/pages';
import {
  CardFooterLoadingExampleComponent
} from '@core/pages';
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
