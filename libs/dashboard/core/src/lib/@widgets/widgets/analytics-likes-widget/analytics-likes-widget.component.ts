import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, DashboardInterface } from '@models';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-analytics-likes-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './analytics-likes-widget.component.html',
  styleUrl: './analytics-likes-widget.component.scss'
})
export class AnalyticsLikesWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
