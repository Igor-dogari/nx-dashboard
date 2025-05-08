import { Component } from '@angular/core';
import {
  DashboardCardsExampleComponent,
  DashboardChartExampleComponent, DashboardExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        DashboardCardsExampleComponent,
        DashboardChartExampleComponent,
        DashboardExampleComponent
    ],
    templateUrl: './store-skeleton-overview.component.html',
    styleUrl: './store-skeleton-overview.component.scss'
})
export class StoreSkeletonOverviewComponent {

}
