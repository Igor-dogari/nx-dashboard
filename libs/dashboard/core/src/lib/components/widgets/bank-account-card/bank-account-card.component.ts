import { Component, inject, input, OnInit } from '@angular/core';
import { WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'emr-bank-account-card',
  imports: [],
  templateUrl: './bank-account-card.component.html',
  styleUrl: './bank-account-card.component.scss'
})
export class BankAccountCardComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
