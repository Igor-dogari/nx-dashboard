import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicTimepickerExampleComponent
} from '@core';
import {
  TimepickerWithDatepickerExampleComponent
} from '@core';
import {
  TimepickerCustomToggleIconExampleComponent
} from '@core';

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
