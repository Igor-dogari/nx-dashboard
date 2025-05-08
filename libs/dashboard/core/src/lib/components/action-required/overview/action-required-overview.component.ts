import { Component } from '@angular/core';
import { PageContentDirective } from '@core/directives';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BasicActionRequiredExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';

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
