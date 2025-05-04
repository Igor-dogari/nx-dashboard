import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicListExampleComponent } from '@core/pages';
import {
  ListWithSectionsExampleComponent
} from '@core/pages';
import {
  ListWithSelectionExampleComponent
} from '@core/pages';
import {
  ListWithSingleSelectionExampleComponent
} from '@core/pages';
import { ListVariantsExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
