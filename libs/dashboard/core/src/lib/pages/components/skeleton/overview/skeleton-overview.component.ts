import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSkeletonExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    imports: [
        PlaygroundComponent,
        BasicSkeletonExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './skeleton-overview.component.html',
    styleUrl: './skeleton-overview.component.scss'
})
export class SkeletonOverviewComponent {

}
