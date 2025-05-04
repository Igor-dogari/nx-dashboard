import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  GoToPremiumWidgetExampleComponent
} from '@core';
import { ToolbarWidgetExampleComponent } from '@core';
import {
  ToolbarAWidgetExampleComponent
} from '@core';
import {
  UpgradeNowWidgetExampleComponent
} from '@core';
import {
  UpgradeToProWidgetExampleComponent
} from '@core';
import {
  UsedSpaceWidgetExampleComponent
} from '@core';

@Component({
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        GoToPremiumWidgetExampleComponent,
        ToolbarWidgetExampleComponent,
        ToolbarAWidgetExampleComponent,
        UpgradeNowWidgetExampleComponent,
        UpgradeToProWidgetExampleComponent,
        UsedSpaceWidgetExampleComponent
    ],
    templateUrl: './sidebar-widgets-overview.component.html',
    styleUrl: './sidebar-widgets-overview.component.scss'
})
export class SidebarWidgetsOverviewComponent {

}
