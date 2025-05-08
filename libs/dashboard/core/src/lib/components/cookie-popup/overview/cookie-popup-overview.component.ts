import { Component } from '@angular/core';
import { BasicCookiePopupExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
