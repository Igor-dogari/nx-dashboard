import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  GoToPremiumWidgetExampleComponent
} from '@core/pages';
import { ToolbarWidgetExampleComponent } from '@core/pages';
import {
  ToolbarAWidgetExampleComponent
} from '@core/pages';
import {
  UpgradeNowWidgetExampleComponent
} from '@core/pages';
import {
  UpgradeToProWidgetExampleComponent
} from '@core/pages';
import {
  UsedSpaceWidgetExampleComponent
} from '@core/pages';

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
