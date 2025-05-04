import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicNavigationExampleComponent
} from '@core';
import {
  NavigationWithHeadingExampleComponent
} from '@core';
import {
  NavigationWithDividerExampleComponent
} from '@core';
import {
  NavigationWithIconsExampleComponent
} from '@core';
import {
  NavigationWithNestedMenuExampleComponent
} from '@core';
import {
  NavigationSecondaryThemeExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  NavigationWithBadgesExampleComponent
} from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicNavigationExampleComponent,
        NavigationWithHeadingExampleComponent,
        NavigationWithDividerExampleComponent,
        NavigationWithIconsExampleComponent,
        NavigationWithNestedMenuExampleComponent,
        NavigationSecondaryThemeExampleComponent,
        PageComponent,
        PageContentDirective,
        NavigationWithBadgesExampleComponent
    ],
    templateUrl: './navigation-overview.component.html',
    styleUrl: './navigation-overview.component.scss'
})
export class NavigationOverviewComponent {

}
