import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicInputsExampleComponent } from '@core/pages';
import {
  TextareaAutosizeExampleComponent
} from '@core/pages';
import { ClearButtonExampleComponent } from '@core/pages';
import { InputDisabledExampleComponent } from '@core/pages';
import { ErrorMessagesExampleComponent } from '@core/pages';
import {
  InputWithHintsExampleComponent
} from '@core/pages';
import {
  PrefixesAndSuffixesExampleComponent
} from '@core/pages';
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
