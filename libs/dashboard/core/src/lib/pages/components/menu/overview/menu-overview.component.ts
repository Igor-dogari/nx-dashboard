import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicMenuExampleComponent } from '../_examples/basic-menu-example/basic-menu-example.component';
import { MenuWithIconsExampleComponent } from '../_examples/menu-with-icons-example/menu-with-icons-example.component';
import { NestedMenuExampleComponent } from '../_examples/nested-menu-example/nested-menu-example.component';
import {
  MenuPositioningExampleComponent
} from '../_examples/menu-positioning-example/menu-positioning-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicMenuExampleComponent,
    MenuWithIconsExampleComponent,
    NestedMenuExampleComponent,
    MenuPositioningExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './menu-overview.component.html',
  styleUrl: './menu-overview.component.scss'
})
export class MenuOverviewComponent {

}
