import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSelectExampleComponent } from '@core';
import { GetSetValueExampleComponent } from '@core';
import {
  FormFieldFeaturesExampleComponent
} from '@core';
import { SelectDisabledExampleComponent } from '@core';
import { ResettingValueExampleComponent } from '@core';
import {
  GroupsOfOptionsExampleComponent
} from '@core';
import {
  MultipleSelectionExampleComponent
} from '@core';
import { CustomTriggerExampleComponent } from '@core';
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
