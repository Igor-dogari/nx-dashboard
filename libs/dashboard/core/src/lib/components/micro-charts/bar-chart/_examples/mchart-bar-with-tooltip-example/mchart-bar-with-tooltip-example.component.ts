import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@core/pipes';
import {
  MchartBarComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@core/components';

@Component({
  selector: 'app-mchart-bar-with-tooltip-example',
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent
  ],
  templateUrl: './mchart-bar-with-tooltip-example.component.html',
  styleUrl: './mchart-bar-with-tooltip-example.component.scss'
})
export class MchartBarWithTooltipExampleComponent {
}
