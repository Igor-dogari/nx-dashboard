import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-active-users-widget',
  imports: [],
  templateUrl: './analytics-active-users-widget.component.html',
  styleUrl: './analytics-active-users-widget.component.scss'
})
export class AnalyticsActiveUsersWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
