import { Component } from '@angular/core';
import {
  BasicPopoverExampleComponent, PageComponent,
  PlaygroundComponent,
  PopoverHoverExampleComponent,
  PopoverWithCustomPositionExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
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
