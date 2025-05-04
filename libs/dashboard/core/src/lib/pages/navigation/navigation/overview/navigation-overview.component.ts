import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicNavigationExampleComponent
} from '@core/pages';
import {
  NavigationWithHeadingExampleComponent
} from '@core/pages';
import {
  NavigationWithDividerExampleComponent
} from '@core/pages';
import {
  NavigationWithIconsExampleComponent
} from '@core/pages';
import {
  NavigationWithNestedMenuExampleComponent
} from '@core/pages';
import {
  NavigationSecondaryThemeExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  NavigationWithBadgesExampleComponent
} from '@core/pages';

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
