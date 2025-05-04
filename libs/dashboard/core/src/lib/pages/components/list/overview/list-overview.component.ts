import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicListExampleComponent } from '@core';
import {
  ListWithSectionsExampleComponent
} from '@core';
import {
  ListWithSelectionExampleComponent
} from '@core';
import {
  ListWithSingleSelectionExampleComponent
} from '@core';
import { ListVariantsExampleComponent } from '@core';
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
