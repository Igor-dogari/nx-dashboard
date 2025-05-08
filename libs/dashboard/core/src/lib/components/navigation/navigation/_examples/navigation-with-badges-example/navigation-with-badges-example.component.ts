import { Component } from '@angular/core';
import {
  NavigationComponent,
  NavigationGroupComponent,
  NavigationGroupMenuComponent,
  NavigationGroupToggleComponent,
  NavigationItemComponent
} from '@core/components';
import { MatIcon } from '@angular/material/icon';
import { NavigationItemBadgeDirective } from '@core/directives';

@Component({
  selector: 'app-navigation-with-badges-example',
  imports: [
    MatIcon,
    NavigationItemBadgeDirective,
    NavigationItemComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationGroupComponent,
    NavigationComponent
  ],
  templateUrl: './navigation-with-badges-example.component.html',
  styleUrl: './navigation-with-badges-example.component.scss'
})
export class NavigationWithBadgesExampleComponent {

}
