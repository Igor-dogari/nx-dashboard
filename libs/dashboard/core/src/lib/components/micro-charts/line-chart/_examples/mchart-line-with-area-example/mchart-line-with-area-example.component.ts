import { Component } from '@angular/core';
import { MchartLineComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-line-with-area-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-with-area-example.component.html',
  styleUrl: './mchart-line-with-area-example.component.scss'
})
export class MchartLineWithAreaExampleComponent {

}
