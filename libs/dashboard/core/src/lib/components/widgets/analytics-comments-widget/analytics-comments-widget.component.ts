import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { MatIcon } from '@angular/material/icon';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-comments-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './analytics-comments-widget.component.html',
  styleUrl: './analytics-comments-widget.component.scss'
})
export class AnalyticsCommentsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
