import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicExpansionPanelExampleComponent
} from '@core';
import {
  ExpansionPanelExpandCollapseTogglesExampleComponent
} from '@core';
import {
  ExpansionPanelAsAccordionExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicExpansionPanelExampleComponent,
        ExpansionPanelExpandCollapseTogglesExampleComponent,
        ExpansionPanelAsAccordionExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './expansion-panel-overview.component.html',
    styleUrl: './expansion-panel-overview.component.scss'
})
export class ExpansionPanelOverviewComponent {

}
