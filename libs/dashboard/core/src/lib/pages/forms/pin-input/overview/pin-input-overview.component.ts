import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPinInputExampleComponent } from '@core';
import {
  PinInputWithPlaceholderExampleComponent
} from '@core';
import {
  PinInputLengthExampleComponent
} from '@core';
import {
  PinInputAcceptCustomSymbolsExampleComponent
} from '@core';
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
