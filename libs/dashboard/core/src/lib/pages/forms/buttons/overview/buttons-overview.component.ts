import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicButtonsExampleComponent } from '@core';
import { RaisedButtonsExampleComponent } from '@core';
import { StrokedButtonsExampleComponent } from '@core';
import { FlatButtonsExampleComponent } from '@core';
import { IconButtonsExampleComponent } from '@core';
import { FabButtonsExampleComponent } from '@core';
import {
  MiniFabButtonsExampleComponent
} from '@core';
import { ButtonLoadingExampleComponent } from '@core';
import { RouterLink } from '@angular/router';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PageAsideDirective } from '@core';
import {
  ButtonsWithInteractiveDisabledExampleComponent
} from '@core';
import {
  ButtonsExtendedFabExampleComponent
} from '@core';
import { ScrollSpyNavComponent, ScrollSpyOnComponent, ScrollSpyTitleComponent } from '@core';
import {
  BreadcrumbItemComponent,
  BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@core';

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
