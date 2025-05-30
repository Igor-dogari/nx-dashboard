import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardInterface, WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

export interface HeadingWidget extends WidgetInterface {
  title: string;
  viewMore?: {
    link: string;
    name: string;
    external: boolean;
  }
}

@Component({
  selector: 'emr-heading-widget',
  imports: [
    RouterLink
  ],
  templateUrl: './heading-widget.component.html',
  styleUrl: './heading-widget.component.css'
})
export class HeadingWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input.required<HeadingWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }

  protected get external(): boolean {
    return this.widget().viewMore?.external || false;
  }
}
