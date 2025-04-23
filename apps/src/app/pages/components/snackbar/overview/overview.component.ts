import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicSnackbarExampleComponent } from '../_examples/basic-snackbar-example/basic-snackbar-example.component';
import {
  SnackbarWithCustomComponentExampleComponent
} from '../_examples/snackbar-with-custom-component-example/snackbar-with-custom-component-example.component';
import {
  ConfigurableSnackbarExampleComponent
} from '../_examples/configurable-snackbar-example/configurable-snackbar-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
    imports: [
        PlaygroundComponent,
        BasicSnackbarExampleComponent,
        SnackbarWithCustomComponentExampleComponent,
        ConfigurableSnackbarExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
