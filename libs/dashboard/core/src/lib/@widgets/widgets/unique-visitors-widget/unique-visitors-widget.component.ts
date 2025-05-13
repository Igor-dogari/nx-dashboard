import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { DASHBOARD } from '../../../consts';
import { WidgetInterface } from '../../../interfaces/widget.interface';

@Component({
  selector: 'emr-unique-visitors-widget',
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './unique-visitors-widget.component.html',
  styleUrl: './unique-visitors-widget.component.scss'
})
export class UniqueVisitorsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
