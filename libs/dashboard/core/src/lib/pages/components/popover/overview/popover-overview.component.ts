import { Component } from '@angular/core';
import { BasicPopoverExampleComponent } from '@core/pages';
import { PlaygroundComponent } from '@core';
import { PopoverHoverExampleComponent } from '@core/pages';
import {
  PopoverWithCustomPositionExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicPopoverExampleComponent,
    PopoverHoverExampleComponent,
    PopoverWithCustomPositionExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTab,
    MatTabGroup
  ],
    templateUrl: './popover-overview.component.html',
    styleUrl: './popover-overview.component.scss'
})
export class PopoverOverviewComponent {

}
