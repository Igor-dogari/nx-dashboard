import { Component, inject, input, OnInit } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@core/components';
import { DashboardInterface, WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

@Component({
  selector: 'emr-tasks-in-progress-widget',
  imports: [MatButton, MatIcon, MatIconButton, AvatarComponent],
  templateUrl: './tasks-in-progress-widget.component.html',
  styleUrl: './tasks-in-progress-widget.component.scss',
})
export class TasksInProgressWidgetComponent implements OnInit {
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
