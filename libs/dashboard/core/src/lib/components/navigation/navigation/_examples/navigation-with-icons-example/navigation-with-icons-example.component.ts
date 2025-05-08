import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  NavigationComponent,
  NavigationItemComponent,
} from '@core/components';
import { NavigationItemIconDirective } from '@core/directives';

@Component({
  selector: 'app-navigation-with-icons-example',
  imports: [
    MatIcon,
    NavigationItemIconDirective,
    NavigationItemComponent,
    NavigationComponent,
  ],
  templateUrl: './navigation-with-icons-example.component.html',
  styleUrl: './navigation-with-icons-example.component.scss'
})
export class NavigationWithIconsExampleComponent {

}
