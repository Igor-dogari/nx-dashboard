import { Component, inject, input, OnInit } from '@angular/core';
import { MchartLineComponent } from '../../../micro-chart/mchart-line/mchart-line.component';
import { MchartTooltipComponent } from '../../../micro-chart/mchart-tooltip/mchart-tooltip.component';
import { MchartTooltipTitleComponent } from '../../../micro-chart/mchart-tooltip-title/mchart-tooltip-title.component';
import { MchartTooltipBodyComponent } from '../../../micro-chart/mchart-tooltip-body/mchart-tooltip-body.component';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { DASHBOARD } from '../../../consts';
import { WidgetInterface } from '../../../interfaces/widget.interface';

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
