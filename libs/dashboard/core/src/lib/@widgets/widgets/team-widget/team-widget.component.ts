import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DASHBOARD, DashboardInterface, WidgetInterface } from '@shared';
import { AvatarComponent } from '@core';

@Component({
  selector: 'emr-team-widget',
  imports: [MatIcon, MatIconButton, AvatarComponent],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss',
})
export class TeamWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
