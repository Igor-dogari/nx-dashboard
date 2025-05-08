import { Component } from '@angular/core';

import {
  AvgClickRateExampleComponent,
  AvgOpenRateExampleComponent,
  BankAccountCardExampleComponent,
  BankCreditCardExampleComponent,
  CurrentPlanExampleComponent,
  CustomerSatisfactionExampleComponent,
  EventsExampleComponent,
  ExchangeExampleComponent,
  MyInvestmentsExampleComponent,
  PageComponent,
  PaymentInformationExampleComponent,
  PlaygroundComponent,
  PurchasesByChannelsExampleComponent,
  SiteVisitorsExampleComponent,
  TasksInProgressExampleComponent,
  TeamExampleComponent,
  TodaySalesExampleComponent,
  TodosExampleComponent,
  TotalProjectsExampleComponent,
  TotalRevenueExampleComponent,
  TotalSubscribersExampleComponent,
  TotalTasksExampleComponent,
  TransactionsExampleComponent,
  UniqueVisitorsExampleComponent,
  VisitDurationExampleComponent, VisitInsightsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    AvgClickRateExampleComponent,
    AvgOpenRateExampleComponent,
    BankAccountCardExampleComponent,
    BankCreditCardExampleComponent,
    CurrentPlanExampleComponent,
    CustomerSatisfactionExampleComponent,
    EventsExampleComponent,
    ExchangeExampleComponent,
    MyInvestmentsExampleComponent,
    PaymentInformationExampleComponent,
    PurchasesByChannelsExampleComponent,
    SiteVisitorsExampleComponent,
    TasksInProgressExampleComponent,
    TeamExampleComponent,
    TodaySalesExampleComponent,
    TodosExampleComponent,
    TotalProjectsExampleComponent,
    TotalRevenueExampleComponent,
    TotalSubscribersExampleComponent,
    TotalTasksExampleComponent,
    TransactionsExampleComponent,
    UniqueVisitorsExampleComponent,
    VisitDurationExampleComponent,
    VisitInsightsExampleComponent
  ],
  templateUrl: './widgets-overview.component.html',
  styleUrl: './widgets-overview.component.scss'
})
export class WidgetsOverviewComponent {

}
