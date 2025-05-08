import { Component } from '@angular/core';
import {
  BasicPinInputExampleComponent,
  PageComponent,
  PinInputAcceptCustomSymbolsExampleComponent,
  PinInputLengthExampleComponent,
  PinInputWithPlaceholderExampleComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
