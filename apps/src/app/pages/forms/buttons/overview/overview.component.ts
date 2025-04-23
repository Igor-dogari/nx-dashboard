import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicButtonsExampleComponent } from '../_examples/basic-buttons-example/basic-buttons-example.component';
import { RaisedButtonsExampleComponent } from '../_examples/raised-buttons-example/raised-buttons-example.component';
import { StrokedButtonsExampleComponent } from '../_examples/stroked-buttons-example/stroked-buttons-example.component';
import { FlatButtonsExampleComponent } from '../_examples/flat-buttons-example/flat-buttons-example.component';
import { IconButtonsExampleComponent } from '../_examples/icon-buttons-example/icon-buttons-example.component';
import { FabButtonsExampleComponent } from '../_examples/fab-buttons-example/fab-buttons-example.component';
import {
  MiniFabButtonsExampleComponent
} from '../_examples/mini-fab-buttons-example/mini-fab-buttons-example.component';
import { ButtonLoadingExampleComponent } from '../_examples/button-loading-example/button-loading-example.component';
import { RouterLink } from '@angular/router';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PageAsideDirective } from '@shared';
import {
  ButtonsWithInteractiveDisabledExampleComponent
} from '../_examples/buttons-with-interactive-disabled-example/buttons-with-interactive-disabled-example.component';
import {
  ButtonsExtendedFabExampleComponent
} from '../_examples/buttons-extended-fab-example/buttons-extended-fab-example.component';
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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
