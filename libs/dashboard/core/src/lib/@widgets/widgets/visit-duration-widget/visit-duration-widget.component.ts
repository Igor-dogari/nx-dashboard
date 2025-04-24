import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardInterface, DASHBOARD, WidgetInterface } from '@models';

@Component({
  selector: 'emr-visit-duration-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './visit-duration-widget.component.html',
  styleUrl: './visit-duration-widget.component.scss'
})
export class VisitDurationWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
