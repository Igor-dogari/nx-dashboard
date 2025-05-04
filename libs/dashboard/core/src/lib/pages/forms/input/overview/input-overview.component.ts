import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicInputsExampleComponent } from '@core';
import {
  TextareaAutosizeExampleComponent
} from '@core';
import { ClearButtonExampleComponent } from '@core';
import { InputDisabledExampleComponent } from '@core';
import { ErrorMessagesExampleComponent } from '@core';
import {
  InputWithHintsExampleComponent
} from '@core';
import {
  PrefixesAndSuffixesExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
