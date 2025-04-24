import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardInterface, DASHBOARD, WidgetInterface } from '@models';

@Component({
  selector: 'emr-total-revenue-widget',
  imports: [
    MatIcon,
  ],
  templateUrl: './total-revenue-widget.component.html',
  styleUrl: './total-revenue-widget.component.scss'
})
export class TotalRevenueWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
