import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import { DASHBOARD, DashboardInterface, WidgetInterface } from '@shared';

@Component({
  selector: 'emr-avg-open-rate-widget',
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './avg-open-rate-widget.component.html',
  styleUrl: './avg-open-rate-widget.component.scss'
})
export class AvgOpenRateWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
