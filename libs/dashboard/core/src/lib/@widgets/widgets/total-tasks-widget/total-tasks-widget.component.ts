import { Component, inject, input, OnInit } from '@angular/core';
import { MchartTooltipBodyComponent } from '../../../micro-chart/mchart-tooltip-body/mchart-tooltip-body.component';
import { MchartTooltipComponent } from '../../../micro-chart/mchart-tooltip/mchart-tooltip.component';
import { MchartTooltipTitleComponent } from '../../../micro-chart/mchart-tooltip-title/mchart-tooltip-title.component';
import { MchartLineComponent } from '../../../micro-chart/mchart-line/mchart-line.component';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { DASHBOARD } from '../../../consts';
import { WidgetInterface } from '../../../interfaces/widget.interface';


@Component({
  selector: 'emr-total-tasks-widget',
  templateUrl: './total-tasks-widget.component.html',
  imports: [
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    MchartLineComponent
  ],
  styleUrl: './total-tasks-widget.component.scss'
})
export class TotalTasksWidgetComponent implements OnInit {
  data = [47, 54, 38, 24, 65, 37];
  labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
