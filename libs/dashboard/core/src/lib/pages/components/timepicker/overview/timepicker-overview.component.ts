import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicTimepickerExampleComponent
} from '@core/pages';
import {
  TimepickerWithDatepickerExampleComponent
} from '@core/pages';
import {
  TimepickerCustomToggleIconExampleComponent
} from '@core/pages';

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
