import { Component } from '@angular/core';
import { MchartPieComponent } from '@core/components';

@Component({
  selector: 'app-mchart-pie-with-legend-example',
  imports: [
    MchartPieComponent
  ],
  templateUrl: './mchart-pie-with-legend-example.component.html',
  styleUrl: './mchart-pie-with-legend-example.component.scss'
})
export class MchartPieWithLegendExampleComponent {
  data = [6, 2, 3, 8, 10];
  labels = ['Chrome', 'Edge', 'Opera', 'Firefox', 'Safari'];
}
