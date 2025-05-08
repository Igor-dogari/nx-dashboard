import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@core/pipes';
import { MchartBarComponent, ResizableContainerComponent } from '@core/components';

@Component({
  selector: 'app-mchart-bar-responsive-example',
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe,
    ResizableContainerComponent
  ],
  templateUrl: './mchart-bar-responsive-example.component.html',
  styleUrl: './mchart-bar-responsive-example.component.scss'
})
export class MchartBarResponsiveExampleComponent {

}
