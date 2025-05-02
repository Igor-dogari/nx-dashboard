import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicDialogExampleComponent } from '../_examples/basic-dialog-example/basic-dialog-example.component';
import {
  DialogScrollableContentExampleComponent
} from '../_examples/dialog-scrollable-content-example/dialog-scrollable-content-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicDialogExampleComponent,
    DialogScrollableContentExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './dialog-overview.component.html',
  styleUrl: './dialog-overview.component.scss'
})
export class DialogOverviewComponent {

}
