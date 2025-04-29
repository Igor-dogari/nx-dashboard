import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { CircleFlagsExampleComponent } from '../_examples/circle-flags-example/circle-flags-example.component';
import {
  MaterialSymbolsIconsExampleComponent
} from '../_examples/material-symbols-icons-example/material-symbols-icons-example.component';
import { PhosphorIconsExampleComponent } from '../_examples/phosphor-icons-example/phosphor-icons-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
