import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicExpansionPanelExampleComponent
} from '@core/pages';
import {
  ExpansionPanelExpandCollapseTogglesExampleComponent
} from '@core/pages';
import {
  ExpansionPanelAsAccordionExampleComponent
} from '@core/pages';
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
