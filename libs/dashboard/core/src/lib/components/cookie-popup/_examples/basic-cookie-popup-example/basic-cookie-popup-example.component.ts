import { Component, signal } from '@angular/core';
import {
    CookiePopupComponent,
} from '@core/components';
import { MatButton } from '@angular/material/button';
import {
  CookiePopupAcceptAllButtonDirective,
  CookiePopupAcceptNecessaryOnlyButtonDirective,
  CookiePopupTitleDirective
} from '@core/directives';
import { CookiePopupAcceptType } from '@core/models';

@Component({
  selector: 'app-basic-cookie-popup-example',
  imports: [
    CookiePopupComponent,
    MatButton,
    CookiePopupTitleDirective,
    CookiePopupAcceptAllButtonDirective,
    CookiePopupAcceptNecessaryOnlyButtonDirective
  ],
  templateUrl: './basic-cookie-popup-example.component.html',
  styleUrl: './basic-cookie-popup-example.component.scss'
})
export class BasicCookiePopupExampleComponent {
  visible = signal(true);

  acceptType = signal<CookiePopupAcceptType | null>(null);

  onCookieAccepted(acceptType: CookiePopupAcceptType) {
    this.acceptType.set(acceptType);
  }
}
