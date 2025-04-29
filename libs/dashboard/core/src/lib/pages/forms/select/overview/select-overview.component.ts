import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicSelectExampleComponent } from '../_examples/basic-select-example/basic-select-example.component';
import { GetSetValueExampleComponent } from '../_examples/get-set-value-example/get-set-value-example.component';
import {
  FormFieldFeaturesExampleComponent
} from '../_examples/form-field-features-example/form-field-features-example.component';
import { SelectDisabledExampleComponent } from '../_examples/disabled-example/select-disabled-example.component';
import { ResettingValueExampleComponent } from '../_examples/resetting-value-example/resetting-value-example.component';
import {
  GroupsOfOptionsExampleComponent
} from '../_examples/groups-of-options-example/groups-of-options-example.component';
import {
  MultipleSelectionExampleComponent
} from '../_examples/multiple-selection-example/multiple-selection-example.component';
import { CustomTriggerExampleComponent } from '../_examples/custom-trigger-example/custom-trigger-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
