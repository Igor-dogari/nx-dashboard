import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicStepperExampleComponent } from '@core/pages';
import {
  StepperVerticalExampleComponent
} from '@core/pages';
import {
  StepperHeaderPositionExampleComponent
} from '@core/pages';
import {
  StepperWithErrorsStateExampleComponent
} from '@core/pages';
import {
  StepperResponsiveExampleComponent
} from '@core/pages';
import {
  StepperLabelBottomPositionExampleComponent
} from '@core/pages';
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
