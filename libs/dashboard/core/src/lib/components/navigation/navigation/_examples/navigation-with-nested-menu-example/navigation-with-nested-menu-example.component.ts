import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  NavigationComponent,
  NavigationGroupComponent, NavigationGroupMenuComponent, NavigationGroupToggleComponent,
  NavigationItemComponent
} from '@core/components';
import { NavigationGroupToggleIconDirective } from '@core/directives';

@Component({
  selector: 'app-navigation-with-nested-menu-example',
  imports: [
    MatIcon,
    NavigationItemComponent,
    NavigationGroupComponent,
    NavigationGroupToggleIconDirective,
    NavigationComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent
  ],
  templateUrl: './navigation-with-nested-menu-example.component.html',
  styleUrl: './navigation-with-nested-menu-example.component.scss'
})
export class NavigationWithNestedMenuExampleComponent {

}
