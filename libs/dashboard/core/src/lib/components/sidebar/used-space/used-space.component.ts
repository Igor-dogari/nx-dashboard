import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GaugeComponent } from '@core/components';

@Component({
  selector: 'emr-used-space',
  imports: [
    GaugeComponent,
    MatIcon
  ],
  templateUrl: './used-space.component.html',
  styleUrl: './used-space.component.scss'
})
export class UsedSpaceComponent {

}
