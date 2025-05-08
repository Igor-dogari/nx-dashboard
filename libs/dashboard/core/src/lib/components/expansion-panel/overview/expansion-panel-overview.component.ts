import { Component } from '@angular/core';
import {
  BasicExpansionPanelExampleComponent, ExpansionPanelAsAccordionExampleComponent,
  ExpansionPanelExpandCollapseTogglesExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
