import { Component } from '@angular/core';
import {
  BasicSelectExampleComponent, CustomTriggerExampleComponent,
  FormFieldFeaturesExampleComponent,
  GetSetValueExampleComponent,
  GroupsOfOptionsExampleComponent, MultipleSelectionExampleComponent, PageComponent,
  PlaygroundComponent,
  ResettingValueExampleComponent,
  SelectDisabledExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
