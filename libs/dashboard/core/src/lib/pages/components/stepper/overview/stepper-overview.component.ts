import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicStepperExampleComponent } from '@core';
import {
  StepperVerticalExampleComponent
} from '@core';
import {
  StepperHeaderPositionExampleComponent
} from '@core';
import {
  StepperWithErrorsStateExampleComponent
} from '@core';
import {
  StepperResponsiveExampleComponent
} from '@core';
import {
  StepperLabelBottomPositionExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicStepperExampleComponent,
        StepperVerticalExampleComponent,
        StepperHeaderPositionExampleComponent,
        StepperWithErrorsStateExampleComponent,
        StepperResponsiveExampleComponent,
        StepperLabelBottomPositionExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './stepper-overview.component.html',
    styleUrl: './stepper-overview.component.scss'
})
export class StepperOverviewComponent {

}
