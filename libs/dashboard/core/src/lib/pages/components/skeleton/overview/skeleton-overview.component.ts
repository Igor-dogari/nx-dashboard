import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicSkeletonExampleComponent } from '../_examples/basic-skeleton-example/basic-skeleton-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
