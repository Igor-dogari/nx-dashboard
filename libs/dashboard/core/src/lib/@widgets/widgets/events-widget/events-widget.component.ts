import { Component, inject, input, OnInit } from '@angular/core';
import { AvatarGroupComponent } from '../../../avatar/avatar-group/avatar-group.component';
import { AvatarComponent } from '../../../avatar/avatar/avatar.component';
import { AvatarTotalComponent } from '../../../avatar/avatar-total/avatar-total.component';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { DASHBOARD } from '../../../consts';
import { WidgetInterface } from '../../../interfaces/widget.interface';

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
