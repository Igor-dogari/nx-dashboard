import { Component } from '@angular/core';
import { BasicResizableContainerExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PlaygroundComponent,
        BasicResizableContainerExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './resizable-container-overview.component.html',
    styleUrl: './resizable-container-overview.component.scss'
})
export class ResizableContainerOverviewComponent {

}
