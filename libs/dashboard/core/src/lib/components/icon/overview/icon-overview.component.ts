import { Component } from '@angular/core';
import {
  CircleFlagsExampleComponent,
  MaterialSymbolsIconsExampleComponent, PageComponent, PhosphorIconsExampleComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PlaygroundComponent,
        CircleFlagsExampleComponent,
        MaterialSymbolsIconsExampleComponent,
        PhosphorIconsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './icon-overview.component.html',
    styleUrl: './icon-overview.component.scss'
})
export class IconOverviewComponent {

}
