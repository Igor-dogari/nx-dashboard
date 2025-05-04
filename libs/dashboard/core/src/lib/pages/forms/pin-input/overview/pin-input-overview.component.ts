import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPinInputExampleComponent } from '@core/pages';
import {
  PinInputWithPlaceholderExampleComponent
} from '@core/pages';
import {
  PinInputLengthExampleComponent
} from '@core/pages';
import {
  PinInputAcceptCustomSymbolsExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    imports: [
        PlaygroundComponent,
        BasicPinInputExampleComponent,
        PinInputWithPlaceholderExampleComponent,
        PinInputLengthExampleComponent,
        PinInputAcceptCustomSymbolsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './pin-input-overview.component.html',
    styleUrl: './pin-input-overview.component.scss'
})
export class PinInputOverviewComponent {

}
