import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicDatepickerExampleComponent
} from '@core/pages';
import {
  DatepickerCustomIconExampleComponent
} from '@core/pages';
import {
  DatepickerWithCustomHeaderExampleComponent
} from '@core/pages';
import {
  DatepickerActionsButtonExampleComponent
} from '@core/pages';
import {
  BasicDateRangePickerExampleComponent
} from '@core/pages';
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
