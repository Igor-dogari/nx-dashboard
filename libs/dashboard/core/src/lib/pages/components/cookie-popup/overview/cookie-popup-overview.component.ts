import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicCookiePopupExampleComponent
} from '@core';

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
