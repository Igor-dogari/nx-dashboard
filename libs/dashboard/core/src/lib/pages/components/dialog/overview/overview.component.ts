import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicDialogExampleComponent } from '../_examples/basic-dialog-example/basic-dialog-example.component';
import {
  DialogScrollableContentExampleComponent
} from '../_examples/dialog-scrollable-content-example/dialog-scrollable-content-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicDialogExampleComponent,
    DialogScrollableContentExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
