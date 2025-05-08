import { Component } from '@angular/core';
import {
  BasicListExampleComponent, ListVariantsExampleComponent,
  ListWithSectionsExampleComponent,
  ListWithSelectionExampleComponent, ListWithSingleSelectionExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicListExampleComponent,
        ListWithSectionsExampleComponent,
        ListWithSelectionExampleComponent,
        ListWithSingleSelectionExampleComponent,
        ListVariantsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './list-overview.component.html',
    styleUrl: './list-overview.component.scss'
})
export class ListOverviewComponent {

}
