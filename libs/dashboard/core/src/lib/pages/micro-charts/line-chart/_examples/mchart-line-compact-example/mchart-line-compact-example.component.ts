import { Component } from '@angular/core';
import { MchartLineComponent } from '@core';
import { ShuffleArrayPipe } from '@shared';

@Component({
  selector: 'app-mchart-line-compact-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-compact-example.component.html',
  styleUrl: './mchart-line-compact-example.component.scss'
})
export class MchartLineCompactExampleComponent {

}
