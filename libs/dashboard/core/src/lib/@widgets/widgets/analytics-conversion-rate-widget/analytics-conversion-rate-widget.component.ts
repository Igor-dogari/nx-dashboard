import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, DashboardInterface } from '@shared';

@Component({
  selector: 'app-analytics-conversion-rate-widget',
  imports: [],
  templateUrl: './analytics-conversion-rate-widget.component.html',
  styleUrl: './analytics-conversion-rate-widget.component.scss'
})
export class AnalyticsConversionRateWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
