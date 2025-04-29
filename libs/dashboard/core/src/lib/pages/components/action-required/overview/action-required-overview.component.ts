import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  BasicActionRequiredExampleComponent
} from '../_examples/basic-action-required-example/basic-action-required-example.component';
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
