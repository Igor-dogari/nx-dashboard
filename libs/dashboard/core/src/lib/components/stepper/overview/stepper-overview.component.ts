import { Component } from '@angular/core';
import {
  BasicStepperExampleComponent, PageComponent,
  PlaygroundComponent,
  StepperHeaderPositionExampleComponent, StepperLabelBottomPositionExampleComponent, StepperResponsiveExampleComponent,
  StepperVerticalExampleComponent, StepperWithErrorsStateExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
