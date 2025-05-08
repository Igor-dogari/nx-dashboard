import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface } from '@core/models';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'app-analytics-total-projects-widget',
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './analytics-total-projects-widget.component.html',
  styleUrl: './analytics-total-projects-widget.component.scss'
})
export class AnalyticsTotalProjectsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<any>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
