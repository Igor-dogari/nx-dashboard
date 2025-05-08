import { Component } from '@angular/core';
import {
  BasicDialogExampleComponent,
  DialogScrollableContentExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
