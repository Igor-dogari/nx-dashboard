import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicExpansionPanelExampleComponent
} from '../_examples/basic-expansion-panel-example/basic-expansion-panel-example.component';
import {
  ExpansionPanelExpandCollapseTogglesExampleComponent
} from '../_examples/expansion-panel-expand-collapse-toggles-example/expansion-panel-expand-collapse-toggles-example.component';
import {
  ExpansionPanelAsAccordionExampleComponent
} from '../_examples/expansion-panel-as-accordion-example/expansion-panel-as-accordion-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
