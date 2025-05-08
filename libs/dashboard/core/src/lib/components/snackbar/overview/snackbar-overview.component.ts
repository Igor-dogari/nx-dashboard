import { Component } from '@angular/core';
import {
  BasicSnackbarExampleComponent, ConfigurableSnackbarExampleComponent, PageComponent,
  PlaygroundComponent,
  SnackbarWithCustomComponentExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PlaygroundComponent,
        BasicSnackbarExampleComponent,
        SnackbarWithCustomComponentExampleComponent,
        ConfigurableSnackbarExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './snackbar-overview.component.html',
    styleUrl: './snackbar-overview.component.scss'
})
export class SnackbarOverviewComponent {

}
