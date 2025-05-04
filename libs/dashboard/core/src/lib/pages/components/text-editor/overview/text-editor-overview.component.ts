import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicTextEditorExampleComponent
} from '@core';
import {
  TextEditorFloatingMenuExampleComponent
} from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicTextEditorExampleComponent,
    TextEditorFloatingMenuExampleComponent
  ],
  templateUrl: './text-editor-overview.component.html',
  styleUrl: './text-editor-overview.component.scss'
})
export class TextEditorOverviewComponent {

}
