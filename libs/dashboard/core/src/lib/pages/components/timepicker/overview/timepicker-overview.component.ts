import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicTimepickerExampleComponent
} from '../_examples/basic-timepicker-example/basic-timepicker-example.component';
import {
  TimepickerWithDatepickerExampleComponent
} from '../_examples/timepicker-with-datepicker-example/timepicker-with-datepicker-example.component';
import {
  TimepickerCustomToggleIconExampleComponent
} from '../_examples/timepicker-custom-toggle-icon-example/timepicker-custom-toggle-icon-example.component';

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
