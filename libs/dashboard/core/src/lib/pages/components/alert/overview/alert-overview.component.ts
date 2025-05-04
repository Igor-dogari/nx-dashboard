import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicAlertExampleComponent } from '@core';
import { AlertVariantsExampleComponent } from '@core';
import {
  AlertWithBorderExampleComponent
} from '@core';
import { AlertWithIconExampleComponent } from '@core';
import {
  AlertWithTitleExampleComponent
} from '@core';
import { AlertActionsExampleComponent } from '@core';
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
