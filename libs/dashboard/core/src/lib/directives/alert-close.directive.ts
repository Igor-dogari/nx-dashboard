import { Directive, HostListener, inject } from '@angular/core';
import { AlertComponent } from '@core/components';
import { ALERT } from '@core/models';

@Directive({
  selector: '[emrAlertClose]',
  exportAs: 'emrAlertClose',
  host: {
    class: 'emr-alert-close',
  },
})
export class AlertCloseDirective {
  private _alert = inject<AlertComponent>(ALERT);

  @HostListener('click')
  private _handleClick() {
    this._alert.api.close();
  }
}
