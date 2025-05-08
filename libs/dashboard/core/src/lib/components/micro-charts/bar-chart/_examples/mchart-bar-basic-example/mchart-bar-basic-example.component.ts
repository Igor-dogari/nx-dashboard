import { Component } from '@angular/core';
import { MchartBarComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-bar-basic-example',
  imports: [
      MchartBarComponent,
      ShuffleArrayPipe
  ],
  templateUrl: './mchart-bar-basic-example.component.html',
  styleUrl: './mchart-bar-basic-example.component.scss'
})
export class MchartBarBasicExampleComponent {

}
