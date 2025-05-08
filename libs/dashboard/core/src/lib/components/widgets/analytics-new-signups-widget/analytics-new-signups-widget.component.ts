import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-new-signups-widget',
  imports: [],
  templateUrl: './analytics-new-signups-widget.component.html',
  styleUrl: './analytics-new-signups-widget.component.scss'
})
export class AnalyticsNewSignupsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
