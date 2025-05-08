import { Component, inject, input, OnInit } from '@angular/core';
import { DashboardInterface, WidgetInterface } from '@core/models';
import { ActionRequiredComponent } from '@core/components';
import { DASHBOARD } from '@core/consts';

export interface ActionRequiredWidget extends WidgetInterface {
  iconName?: string;
  description: string;
  buttonText: string;
  actionText: string;
}

@Component({
  selector: 'emr-action-required-widget',
  exportAs: 'emrActionRequiredWidget',
  imports: [ActionRequiredComponent],
  templateUrl: './action-required-widget.component.html',
  styleUrl: './action-required-widget.component.css',
  host: {
    class: 'emr-action-required-widget',
  },
})
export class ActionRequiredWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<ActionRequiredWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
