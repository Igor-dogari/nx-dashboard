import { Component, inject, input, OnInit } from '@angular/core';
import {
  MchartLineComponent, MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@core';
import { DashboardInterface, DASHBOARD, WidgetInterface } from '@core';

@Component({
  selector: 'emr-total-projects-widget',
  imports: [
    MchartLineComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    MchartTooltipBodyComponent
  ],
  templateUrl: './total-projects-widget.component.html',
  styleUrl: './total-projects-widget.component.scss'
})
export class TotalProjectsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  data = [47, 54, 38, 24, 65, 37];
  labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
