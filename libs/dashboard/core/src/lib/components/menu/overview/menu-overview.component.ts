import { Component } from '@angular/core';
import {
  BasicMenuExampleComponent, MenuPositioningExampleComponent,
  MenuWithIconsExampleComponent,
  NestedMenuExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
