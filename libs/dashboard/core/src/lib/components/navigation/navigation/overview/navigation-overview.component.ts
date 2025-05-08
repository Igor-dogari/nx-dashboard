import { Component } from '@angular/core';
import {
  BasicNavigationExampleComponent,
  NavigationSecondaryThemeExampleComponent, NavigationWithBadgesExampleComponent,
  NavigationWithDividerExampleComponent,
  NavigationWithHeadingExampleComponent,
  NavigationWithIconsExampleComponent,
  NavigationWithNestedMenuExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
