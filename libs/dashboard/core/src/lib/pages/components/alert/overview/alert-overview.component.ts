import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicAlertExampleComponent } from '@core/pages';
import { AlertVariantsExampleComponent } from '@core/pages';
import {
  AlertWithBorderExampleComponent
} from '@core/pages';
import { AlertWithIconExampleComponent } from '@core/pages';
import {
  AlertWithTitleExampleComponent
} from '@core/pages';
import { AlertActionsExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatDivider } from '@angular/material/divider';

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
