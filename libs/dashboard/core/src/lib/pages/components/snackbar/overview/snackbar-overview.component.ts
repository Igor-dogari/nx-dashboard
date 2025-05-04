import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSnackbarExampleComponent } from '@core/pages';
import {
  SnackbarWithCustomComponentExampleComponent
} from '@core/pages';
import {
  ConfigurableSnackbarExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
