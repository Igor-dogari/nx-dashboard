import { Component } from '@angular/core';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate,
} from '@angular/material/datepicker';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import {
  DashboardCardsSkeletonComponent,
  DashboardChartWidgetSkeletonComponent,
  DashboardComponent,
  DashboardStatsWidgetSkeletonComponent,
} from '@core/components';
import { WidgetInterface, WidgetConfigInterface } from '@core/models';

@Component({
  selector: 'app-ecommerce',
  imports: [
    MatDateRangeInput,
    MatEndDate,
    MatStartDate,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatFormField,
    MatSuffix,
    DashboardComponent,
  ],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss',
})
export class EcommerceComponent {
  configs: WidgetConfigInterface[] = [
    {
      type: 'total-revenue-widget',
      skeleton: DashboardStatsWidgetSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.TotalRevenueWidgetComponent),
    },
    {
      type: 'site-visitors-widget',
      skeleton: DashboardStatsWidgetSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.SiteVisitorsWidgetComponent),
    },
    {
      type: 'visit-duration-widget',
      skeleton: DashboardStatsWidgetSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.VisitDurationWidgetComponent),
    },
    {
      type: 'purchases-by-channels-widget',
      skeleton: DashboardChartWidgetSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.PurchasesByChannelsWidgetComponent),
    },
    {
      type: 'visitor-insights-widget',
      skeleton: DashboardChartWidgetSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.VisitorInsightsWidgetComponent),
    },
    {
      type: 'today-sales-widget',
      skeleton: DashboardCardsSkeletonComponent,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.TodaySalesWidgetComponent),
    },
    {
      type: 'exchange-widget',
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.ExchangeWidgetComponent),
    },
    {
      type: 'customer-satisfaction-widget',
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.CustomerSatisfactionWidgetComponent),
    },
  ];
  widgets: WidgetInterface[] = [
    {
      id: 1,
      type: 'total-revenue-widget',
      columns: 3,
    },
    {
      id: 2,
      type: 'site-visitors-widget',
      columns: 3,
    },
    {
      id: 3,
      type: 'visit-duration-widget',
      columns: 3,
    },
    {
      id: 4,
      type: 'purchases-by-channels-widget',
      columns: 6,
    },
    {
      id: 5,
      type: 'visitor-insights-widget',
      columns: 6,
    },
    {
      id: 6,
      type: 'today-sales-widget',
      columns: 12,
    },
    {
      id: 7,
      type: 'exchange-widget',
      columns: 3,
      skeleton: {
        minHeight: '300px',
      },
    },
    {
      id: 8,
      type: 'customer-satisfaction-widget',
      columns: 4,
      skeleton: {
        minHeight: '300px',
      },
    },
  ];
}
