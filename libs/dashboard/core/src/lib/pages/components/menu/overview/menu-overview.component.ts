import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicMenuExampleComponent } from '@core';
import { MenuWithIconsExampleComponent } from '@core';
import { NestedMenuExampleComponent } from '@core';
import {
  MenuPositioningExampleComponent
} from '@core';
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
