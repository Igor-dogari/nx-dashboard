import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardInterface, DASHBOARD, WidgetInterface } from '@models';

@Component({
  selector: 'emr-customer-satisfaction-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './customer-satisfaction-widget.component.html',
  styleUrl: './customer-satisfaction-widget.component.scss'
})
export class CustomerSatisfactionWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
