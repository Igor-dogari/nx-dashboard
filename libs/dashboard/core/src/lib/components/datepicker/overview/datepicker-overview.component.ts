import { Component } from '@angular/core';
import {
  BasicDatepickerExampleComponent, BasicDateRangePickerExampleComponent, DatepickerActionsButtonExampleComponent,
  DatepickerCustomIconExampleComponent, DatepickerWithCustomHeaderExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
