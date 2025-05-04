import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSelectExampleComponent } from '@core/pages';
import { GetSetValueExampleComponent } from '@core/pages';
import {
  FormFieldFeaturesExampleComponent
} from '@core/pages';
import { SelectDisabledExampleComponent } from '@core/pages';
import { ResettingValueExampleComponent } from '@core/pages';
import {
  GroupsOfOptionsExampleComponent
} from '@core/pages';
import {
  MultipleSelectionExampleComponent
} from '@core/pages';
import { CustomTriggerExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicSelectExampleComponent,
        GetSetValueExampleComponent,
        FormFieldFeaturesExampleComponent,
        SelectDisabledExampleComponent,
        ResettingValueExampleComponent,
        GroupsOfOptionsExampleComponent,
        MultipleSelectionExampleComponent,
        CustomTriggerExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './select-overview.component.html',
    styleUrl: './select-overview.component.scss'
})
export class SelectOverviewComponent {

}
