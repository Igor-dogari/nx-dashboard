import { Component, inject, input, OnInit } from '@angular/core';
import {
  AvatarComponent,
  AvatarGroupComponent,
  AvatarTotalComponent,
} from '@core';
import { DASHBOARD, DashboardInterface, WidgetInterface } from '@models';

@Component({
  selector: 'emr-events-widget',
  templateUrl: './events-widget.component.html',
  imports: [AvatarGroupComponent, AvatarComponent, AvatarTotalComponent],
  styleUrl: './events-widget.component.scss',
})
export class EventsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, {
    optional: true,
  });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
