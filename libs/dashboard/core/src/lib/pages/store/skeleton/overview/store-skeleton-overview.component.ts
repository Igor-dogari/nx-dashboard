import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { DashboardCardsExampleComponent } from '@core';
import { DashboardChartExampleComponent } from '@core';
import { DashboardExampleComponent } from '@core';

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
