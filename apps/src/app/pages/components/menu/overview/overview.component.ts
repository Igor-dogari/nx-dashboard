import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicMenuExampleComponent } from '../_examples/basic-menu-example/basic-menu-example.component';
import { MenuWithIconsExampleComponent } from '../_examples/menu-with-icons-example/menu-with-icons-example.component';
import { NestedMenuExampleComponent } from '../_examples/nested-menu-example/nested-menu-example.component';
import {
  MenuPositioningExampleComponent
} from '../_examples/menu-positioning-example/menu-positioning-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
