import { Component } from '@angular/core';
import { BasicSkeletonExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
