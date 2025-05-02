import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  TabPanelWithPanelsInsideExampleComponent
} from '../_examples/tab-panel-with-panels-inside-example/tab-panel-with-panels-inside-example.component';
import { BasicTabPanelExampleComponent } from '../_examples/basic-tab-panel-example/basic-tab-panel-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  TabPanelCompactExampleComponent
} from '../_examples/tab-panel-compact-example/tab-panel-compact-example.component';

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
