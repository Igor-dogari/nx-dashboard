import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicDialogExampleComponent } from '@core/pages';
import {
  DialogScrollableContentExampleComponent
} from '@core/pages';
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
