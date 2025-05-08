import { Component } from '@angular/core';
import {
  BasicTabPanelExampleComponent, PageComponent,
  PlaygroundComponent, TabPanelCompactExampleComponent,
  TabPanelWithPanelsInsideExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
