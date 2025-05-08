import { Component } from '@angular/core';
import {
  BasicButtonsExampleComponent, BreadcrumbItemComponent, BreadcrumbsComponent, BreadcrumbSeparatorComponent,
  ButtonLoadingExampleComponent,
  ButtonsExtendedFabExampleComponent,
  ButtonsWithInteractiveDisabledExampleComponent,
  FabButtonsExampleComponent,
  FlatButtonsExampleComponent,
  IconButtonsExampleComponent,
  MiniFabButtonsExampleComponent,
  PageComponent,
  PlaygroundComponent,
  RaisedButtonsExampleComponent, ScrollSpyNavComponent, ScrollSpyOnComponent, ScrollSpyTitleComponent,
  StrokedButtonsExampleComponent
} from '@core/components';
import { RouterLink } from '@angular/router';
import { PageContentDirective } from '@core/directives';
import { PageAsideDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicButtonsExampleComponent,
    RaisedButtonsExampleComponent,
    StrokedButtonsExampleComponent,
    FlatButtonsExampleComponent,
    IconButtonsExampleComponent,
    FabButtonsExampleComponent,
    MiniFabButtonsExampleComponent,
    ButtonLoadingExampleComponent,
    RouterLink,
    PageComponent,
    PageContentDirective,
    PageAsideDirective,
    ButtonsWithInteractiveDisabledExampleComponent,
    ButtonsExtendedFabExampleComponent,
    ScrollSpyNavComponent,
    ScrollSpyTitleComponent,
    ScrollSpyOnComponent,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './buttons-overview.component.html',
  styleUrl: './buttons-overview.component.scss'
})
export class ButtonsOverviewComponent {

}
