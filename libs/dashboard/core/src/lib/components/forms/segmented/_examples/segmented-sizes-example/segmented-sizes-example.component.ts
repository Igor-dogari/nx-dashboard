import { Component } from '@angular/core';
import { SegmentedButtonComponent, SegmentedComponent } from '@core/components';

@Component({
  selector: 'app-segmented-sizes-example',
  imports: [
    SegmentedComponent,
    SegmentedButtonComponent
  ],
  templateUrl: './segmented-sizes-example.component.html',
  styleUrl: './segmented-sizes-example.component.scss'
})
export class SegmentedSizesExampleComponent {

}
