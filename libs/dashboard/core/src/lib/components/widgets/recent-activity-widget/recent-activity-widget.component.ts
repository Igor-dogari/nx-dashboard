import { Component, inject, input, OnInit } from '@angular/core';
import { WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'emr-recent-activity-widget',
  imports: [],
  templateUrl: './recent-activity-widget.component.html',
  styleUrl: './recent-activity-widget.component.scss'
})
export class RecentActivityWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
