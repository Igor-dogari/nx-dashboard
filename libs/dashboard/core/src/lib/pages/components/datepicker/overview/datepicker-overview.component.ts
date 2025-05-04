import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicDatepickerExampleComponent
} from '@core';
import {
  DatepickerCustomIconExampleComponent
} from '@core';
import {
  DatepickerWithCustomHeaderExampleComponent
} from '@core';
import {
  DatepickerActionsButtonExampleComponent
} from '@core';
import {
  BasicDateRangePickerExampleComponent
} from '@core';
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
