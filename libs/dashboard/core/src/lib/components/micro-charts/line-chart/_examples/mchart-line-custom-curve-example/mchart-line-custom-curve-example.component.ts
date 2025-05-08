import { Component } from '@angular/core';
import { MchartLineComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-line-custom-curve-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-custom-curve-example.component.html',
  styleUrl: './mchart-line-custom-curve-example.component.scss'
})
export class MchartLineCustomCurveExampleComponent {

}
