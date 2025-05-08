import { Component } from '@angular/core';
import {
  BasicCardExampleComponent,
  CardActionsExampleComponent, CardFooterLoadingExampleComponent,
  CardMultipleSectionsExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
