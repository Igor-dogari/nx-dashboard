import { Component } from '@angular/core';
import { SegmentedButtonComponent, SegmentedComponent } from '@core/components';

@Component({
  selector: 'app-segmented-disabled-example',
  imports: [
    SegmentedButtonComponent,
    SegmentedComponent
  ],
  templateUrl: './segmented-disabled-example.component.html',
  styleUrl: './segmented-disabled-example.component.scss'
})
export class SegmentedDisabledExampleComponent {

}
