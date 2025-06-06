import { Component, inject, input, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { DashboardInterface, WidgetInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

export interface ArticleSnippetWidget extends WidgetInterface {
  title: string;
  publishedAt: Date | string;
  imagePreviewUrl: string;
}

@Component({
  selector: 'emr-article-snippet-widget',
  imports: [
    MatRipple,
    DatePipe
  ],
  templateUrl: './article-snippet-widget.component.html',
  styleUrl: './article-snippet-widget.component.css'
})
export class ArticleSnippetWidgetComponent implements OnInit {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input.required<ArticleSnippetWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
