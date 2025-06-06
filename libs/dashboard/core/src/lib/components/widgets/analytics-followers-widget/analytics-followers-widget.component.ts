import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { MatIcon } from '@angular/material/icon';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-followers-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './analytics-followers-widget.component.html',
  styleUrl: './analytics-followers-widget.component.scss'
})
export class AnalyticsFollowersWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
