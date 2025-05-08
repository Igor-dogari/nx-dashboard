import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DashboardInterface, WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'emr-today-sales-widget',
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './today-sales-widget.component.html',
  styleUrl: './today-sales-widget.component.scss'
})
export class TodaySalesWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
