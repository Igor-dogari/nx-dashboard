import { Component } from '@angular/core';
import { BasicFilterBuilderExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicFilterBuilderExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './filter-builder-overview.component.html',
    styleUrl: './filter-builder-overview.component.scss'
})
export class FilterBuilderOverviewComponent {

}
