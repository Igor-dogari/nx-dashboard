import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  TabPanelWithPanelsInsideExampleComponent
} from '@core';
import { BasicTabPanelExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  TabPanelCompactExampleComponent
} from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        TabPanelWithPanelsInsideExampleComponent,
        BasicTabPanelExampleComponent,
        PageComponent,
        PageContentDirective,
        TabPanelCompactExampleComponent
    ],
    templateUrl: './tab-panel-overview.component.html',
    styleUrl: './tab-panel-overview.component.scss'
})
export class TabPanelOverviewComponent {

}
