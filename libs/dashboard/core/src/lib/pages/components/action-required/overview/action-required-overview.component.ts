import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicActionRequiredExampleComponent
} from '@core/pages';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicActionRequiredExampleComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './action-required-overview.component.html',
  styleUrl: './action-required-overview.component.scss'
})
export class ActionRequiredOverviewComponent {

}
