import { Component } from '@angular/core';
import {
  BasicTextEditorExampleComponent,
  PageComponent,
  PlaygroundComponent,
  TextEditorFloatingMenuExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
