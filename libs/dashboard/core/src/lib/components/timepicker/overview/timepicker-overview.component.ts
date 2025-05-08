import { Component } from '@angular/core';
import {
  BasicTimepickerExampleComponent,
  PageComponent,
  PlaygroundComponent, TimepickerCustomToggleIconExampleComponent,
  TimepickerWithDatepickerExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicTimepickerExampleComponent,
    TimepickerWithDatepickerExampleComponent,
    TimepickerCustomToggleIconExampleComponent
  ],
  templateUrl: './timepicker-overview.component.html',
  styleUrl: './timepicker-overview.component.scss'
})
export class TimepickerOverviewComponent {

}
