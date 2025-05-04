import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { DashboardCardsExampleComponent } from '@core/pages';
import { DashboardChartExampleComponent } from '@core/pages';
import { DashboardExampleComponent } from '@core/pages';

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
