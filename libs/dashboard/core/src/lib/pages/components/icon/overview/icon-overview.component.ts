import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { CircleFlagsExampleComponent } from '@core/pages';
import {
  MaterialSymbolsIconsExampleComponent
} from '@core/pages';
import { PhosphorIconsExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
