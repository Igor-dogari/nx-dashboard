import { Component } from '@angular/core';
import { WidgetInterface, WidgetConfigInterface } from '@core/models';
import { DashboardComponent } from '@core/components';

@Component({
  selector: 'app-analytics',
  imports: [DashboardComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  configs: WidgetConfigInterface[] = [
    {
      type: 'analytics-total-users-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsTotalUsersWidgetComponent),
    },
    {
      type: 'analytics-active-users-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsActiveUsersWidgetComponent),
    },
    {
      type: 'analytics-new-signups-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsNewSignupsWidgetComponent),
    },
    {
      type: 'analytics-conversion-rate-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsConversionRateWidgetComponent),
    },
    {
      type: 'analytics-total-projects-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsTotalProjectsWidgetComponent),
    },
    {
      type: 'analytics-ended-projects-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsEndedProjectsWidgetComponent),
    },
    {
      type: 'analytics-running-projects-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsRunningProjectsWidgetComponent),
    },
    {
      type: 'analytics-pending-projects-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsPendingProjectsWidgetComponent),
    },
    {
      type: 'analytics-followers-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsFollowersWidgetComponent),
    },
    {
      type: 'analytics-likes-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsLikesWidgetComponent),
    },
    {
      type: 'analytics-comments-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsCommentsWidgetComponent),
    },
    {
      type: 'analytics-avg-order-value-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsAvgOrderValueWidgetComponent),
    },
    {
      type: 'analytics-total-orders-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsTotalOrdersWidgetComponent),
    },
    {
      type: 'analytics-gross-revenue-widget',
      skeleton: null,
      component: () =>
        import(
          '@core/components'
        ).then((c) => c.AnalyticsGrossRevenueWidgetComponent),
    },
  ];
  widgets: WidgetInterface[] = [
    {
      id: 12,
      type: 'analytics-gross-revenue-widget',
      columns: 4,
    },
    {
      id: 13,
      type: 'analytics-avg-order-value-widget',
      columns: 4,
    },
    {
      id: 14,
      type: 'analytics-total-orders-widget',
      columns: 4,
    },
    {
      id: 9,
      type: 'analytics-followers-widget',
      columns: 4,
    },
    {
      id: 10,
      type: 'analytics-likes-widget',
      columns: 4,
    },
    {
      id: 11,
      type: 'analytics-comments-widget',
      columns: 4,
    },
    {
      id: 1,
      type: 'analytics-total-users-widget',
      columns: 3,
    },
    {
      id: 2,
      type: 'analytics-active-users-widget',
      columns: 3,
    },
    {
      id: 3,
      type: 'analytics-new-signups-widget',
      columns: 3,
    },
    {
      id: 4,
      type: 'analytics-conversion-rate-widget',
      columns: 3,
    },
    {
      id: 5,
      type: 'analytics-total-projects-widget',
      columns: 3,
    },
    {
      id: 6,
      type: 'analytics-ended-projects-widget',
      columns: 3,
    },
    {
      id: 7,
      type: 'analytics-running-projects-widget',
      columns: 3,
    },
    {
      id: 8,
      type: 'analytics-pending-projects-widget',
      columns: 3,
    },
  ];
}
