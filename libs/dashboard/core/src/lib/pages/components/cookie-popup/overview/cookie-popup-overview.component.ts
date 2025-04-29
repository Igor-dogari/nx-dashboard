import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  BasicCookiePopupExampleComponent
} from '../_examples/basic-cookie-popup-example/basic-cookie-popup-example.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCookiePopupExampleComponent
  ],
  templateUrl: './cookie-popup-overview.component.html',
  styleUrl: './cookie-popup-overview.component.scss'
})
export class CookiePopupOverviewComponent {

}
