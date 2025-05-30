import { Component } from '@angular/core';
import { MchartLineComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-line-with-markers-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-with-markers-example.component.html',
  styleUrl: './mchart-line-with-markers-example.component.scss'
})
export class MchartLineWithMarkersExampleComponent {

}
