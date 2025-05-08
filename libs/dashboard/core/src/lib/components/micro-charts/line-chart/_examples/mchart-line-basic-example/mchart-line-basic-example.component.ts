import { Component } from '@angular/core';
import { MchartLineComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-line-basic-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-basic-example.component.html',
  styleUrl: './mchart-line-basic-example.component.scss'
})
export class MchartLineBasicExampleComponent {

}
