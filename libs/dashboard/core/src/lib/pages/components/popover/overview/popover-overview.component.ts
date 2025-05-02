import { Component } from '@angular/core';
import { BasicPopoverExampleComponent } from '../_examples/basic-popover-example/basic-popover-example.component';
import { PlaygroundComponent } from '@core';
import { PopoverHoverExampleComponent } from '../_examples/popover-hover-example/popover-hover-example.component';
import {
  PopoverWithCustomPositionExampleComponent
} from '../_examples/popover-with-custom-position-example/popover-with-custom-position-example.component';
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
