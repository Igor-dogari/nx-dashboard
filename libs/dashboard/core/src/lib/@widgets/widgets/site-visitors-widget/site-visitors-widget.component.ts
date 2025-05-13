import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { DASHBOARD } from '../../../consts';
import { WidgetInterface } from '../../../interfaces/widget.interface';

@Component({
  selector: 'emr-site-visitors-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './site-visitors-widget.component.html',
  styleUrl: './site-visitors-widget.component.scss'
})
export class SiteVisitorsWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
