import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-total-users-widget',
  imports: [],
  templateUrl: './analytics-total-users-widget.component.html',
  styleUrl: './analytics-total-users-widget.component.scss'
})
export class AnalyticsTotalUsersWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
