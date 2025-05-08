import { Component } from '@angular/core';
import {
  BasicInputsExampleComponent,
  ClearButtonExampleComponent,
  ErrorMessagesExampleComponent,
  InputDisabledExampleComponent,
  InputWithHintsExampleComponent, PageComponent,
  PlaygroundComponent, PrefixesAndSuffixesExampleComponent,
  TextareaAutosizeExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PlaygroundComponent,
        BasicInputsExampleComponent,
        TextareaAutosizeExampleComponent,
        ClearButtonExampleComponent,
        InputDisabledExampleComponent,
        ErrorMessagesExampleComponent,
        InputWithHintsExampleComponent,
        PrefixesAndSuffixesExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './input-overview.component.html',
    styleUrl: './input-overview.component.scss'
})
export class InputOverviewComponent {

}
