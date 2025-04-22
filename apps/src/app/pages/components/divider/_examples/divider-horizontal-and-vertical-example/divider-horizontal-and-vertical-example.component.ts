import { Component } from '@angular/core';
import { HorizontalDividerComponent, VerticalDividerComponent } from '@core';

@Component({
  selector: 'app-divider-horizontal-and-vertical-example',
  imports: [
    HorizontalDividerComponent,
    VerticalDividerComponent
  ],
  templateUrl: './divider-horizontal-and-vertical-example.component.html',
  styleUrl: './divider-horizontal-and-vertical-example.component.scss'
})
export class DividerHorizontalAndVerticalExampleComponent {

}
