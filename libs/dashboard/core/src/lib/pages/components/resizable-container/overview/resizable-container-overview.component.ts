import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicResizableContainerExampleComponent
} from '../_examples/basic-resizable-container-example/basic-resizable-container-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
