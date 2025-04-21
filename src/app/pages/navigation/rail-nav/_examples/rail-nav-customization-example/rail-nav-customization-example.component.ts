import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RailNavComponent, RailNavItemComponent } from 'core';

@Component({
  selector: 'app-rail-nav-customization-example',
  imports: [
    MatIcon,
    RailNavComponent,
    RailNavItemComponent
  ],
  templateUrl: './rail-nav-customization-example.component.html',
  styleUrl: './rail-nav-customization-example.component.scss'
})
export class RailNavCustomizationExampleComponent {

}
