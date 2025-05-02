import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicDatepickerExampleComponent
} from '../_examples/basic-datepicker-example/basic-datepicker-example.component';
import {
  DatepickerCustomIconExampleComponent
} from '../_examples/datepicker-custom-icon-example/datepicker-custom-icon-example.component';
import {
  DatepickerWithCustomHeaderExampleComponent
} from '../_examples/datepicker-with-custom-header-example/datepicker-with-custom-header-example.component';
import {
  DatepickerActionsButtonExampleComponent
} from '../_examples/datepicker-actions-button-example/datepicker-actions-button-example.component';
import {
  BasicDateRangePickerExampleComponent
} from '../_examples/basic-date-range-picker-example/basic-date-range-picker-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicDatepickerExampleComponent,
    DatepickerCustomIconExampleComponent,
    DatepickerWithCustomHeaderExampleComponent,
    DatepickerActionsButtonExampleComponent,
    BasicDateRangePickerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './datepicker-overview.component.html',
  styleUrl: './datepicker-overview.component.scss'
})
export class DatepickerOverviewComponent {

}
