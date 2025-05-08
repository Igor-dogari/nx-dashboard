import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@core/pipes';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent, ResizableContainerComponent
} from '@core/components';

@Component({
  selector: 'app-mchart-line-responsive-example',
  imports: [
    MchartLineComponent,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    ShuffleArrayPipe,
    ResizableContainerComponent
  ],
  templateUrl: './mchart-line-responsive-example.component.html',
  styleUrl: './mchart-line-responsive-example.component.scss'
})
export class MchartLineResponsiveExampleComponent {

}
