import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
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
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
