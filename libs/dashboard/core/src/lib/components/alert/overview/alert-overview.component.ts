import { Component } from '@angular/core';
import { PageContentDirective } from '@core/directives';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatDivider } from '@angular/material/divider';
import {
  AlertActionsExampleComponent,
  AlertVariantsExampleComponent,
  AlertWithBorderExampleComponent, AlertWithIconExampleComponent, AlertWithTitleExampleComponent,
  BasicAlertExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';

@Component({
  imports: [
    PlaygroundComponent,
    BasicAlertExampleComponent,
    AlertVariantsExampleComponent,
    AlertWithBorderExampleComponent,
    AlertWithIconExampleComponent,
    AlertWithTitleExampleComponent,
    AlertActionsExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTabGroup,
    MatTab,
    MatDivider
  ],
    templateUrl: './alert-overview.component.html',
    styleUrl: './alert-overview.component.scss'
})
export class AlertOverviewComponent {

}
