import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
