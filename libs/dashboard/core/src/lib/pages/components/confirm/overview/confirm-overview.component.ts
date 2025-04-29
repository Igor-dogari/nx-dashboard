import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import { BasicConfirmExampleComponent } from '../_examples/basic-confirm-example/basic-confirm-example.component';
import {
  ConfirmFormModalExampleComponent
} from '../_examples/confirm-form-modal-example/confirm-form-modal-example.component';

@Component({
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        BasicConfirmExampleComponent,
        ConfirmFormModalExampleComponent
    ],
    templateUrl: './confirm-overview.component.html',
    styleUrl: './confirm-overview.component.scss'
})
export class ConfirmOverviewComponent {

}
