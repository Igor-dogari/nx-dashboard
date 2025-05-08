import { Component } from '@angular/core';
import { MchartBarComponent } from '@core/components';
import { ShuffleArrayPipe } from '@core/pipes';

@Component({
  selector: 'app-mchart-bar-with-bar-highlight-example',
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-bar-with-bar-highlight-example.component.html',
  styleUrl: './mchart-bar-with-bar-highlight-example.component.scss'
})
export class MchartBarWithBarHighlightExampleComponent {

}
