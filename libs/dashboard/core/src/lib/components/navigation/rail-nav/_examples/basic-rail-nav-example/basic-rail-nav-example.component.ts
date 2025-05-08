import { Component } from '@angular/core';
import { RailNavComponent, RailNavItemComponent } from '@core/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-rail-nav-example',
  imports: [
    RailNavComponent,
    RailNavItemComponent,
    MatIcon
  ],
  templateUrl: './basic-rail-nav-example.component.html',
  styleUrl: './basic-rail-nav-example.component.scss'
})
export class BasicRailNavExampleComponent {

}
