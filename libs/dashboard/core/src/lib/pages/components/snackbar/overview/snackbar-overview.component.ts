import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSnackbarExampleComponent } from '../_examples/basic-snackbar-example/basic-snackbar-example.component';
import {
  SnackbarWithCustomComponentExampleComponent
} from '../_examples/snackbar-with-custom-component-example/snackbar-with-custom-component-example.component';
import {
  ConfigurableSnackbarExampleComponent
} from '../_examples/configurable-snackbar-example/configurable-snackbar-example.component';
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
