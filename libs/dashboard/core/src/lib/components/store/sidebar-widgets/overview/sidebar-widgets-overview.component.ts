import { Component } from '@angular/core';
import {
  GoToPremiumWidgetExampleComponent,
  PageComponent,
  PlaygroundComponent,
  ToolbarAWidgetExampleComponent,
  ToolbarWidgetExampleComponent,
  UpgradeNowWidgetExampleComponent,
  UpgradeToProWidgetExampleComponent,
  UsedSpaceWidgetExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
