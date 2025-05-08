import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-ended-projects-widget',
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './analytics-ended-projects-widget.component.html',
  styleUrl: './analytics-ended-projects-widget.component.scss'
})
export class AnalyticsEndedProjectsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
