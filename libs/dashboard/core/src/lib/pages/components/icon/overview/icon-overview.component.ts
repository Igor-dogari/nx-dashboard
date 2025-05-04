import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { CircleFlagsExampleComponent } from '@core';
import {
  MaterialSymbolsIconsExampleComponent
} from '@core';
import { PhosphorIconsExampleComponent } from '@core';
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
