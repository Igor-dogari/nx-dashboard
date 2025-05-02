import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { DashboardCardsExampleComponent } from '../_examples/dashboard-cards-example/dashboard-cards-example.component';
import { DashboardChartExampleComponent } from '../_examples/dashboard-chart-example/dashboard-chart-example.component';
import { DashboardExampleComponent } from '../_examples/dashboard-example/dashboard-example.component';

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
