import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPinInputExampleComponent } from '../_examples/basic-pin-input-example/basic-pin-input-example.component';
import {
  PinInputWithPlaceholderExampleComponent
} from '../_examples/pin-input-with-placeholder-example/pin-input-with-placeholder-example.component';
import {
  PinInputLengthExampleComponent
} from '../_examples/pin-input-length-example/pin-input-length-example.component';
import {
  PinInputAcceptCustomSymbolsExampleComponent
} from '../_examples/pin-input-accept-custom-symbols-example/pin-input-accept-custom-symbols-example.component';
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
