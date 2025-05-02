import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicInputsExampleComponent } from '../_examples/basic-inputs-example/basic-inputs-example.component';
import {
  TextareaAutosizeExampleComponent
} from '../_examples/textarea-autosize-example/textarea-autosize-example.component';
import { ClearButtonExampleComponent } from '../_examples/clear-button-example/clear-button-example.component';
import { InputDisabledExampleComponent } from '../_examples/disabled-example/input-disabled-example.component';
import { ErrorMessagesExampleComponent } from '../_examples/error-messages-example/error-messages-example.component';
import {
  InputWithHintsExampleComponent
} from '../_examples/input-with-hints-example/input-with-hints-example.component';
import {
  PrefixesAndSuffixesExampleComponent
} from '../_examples/prefixes-and-suffixes-example/prefixes-and-suffixes-example.component';
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
