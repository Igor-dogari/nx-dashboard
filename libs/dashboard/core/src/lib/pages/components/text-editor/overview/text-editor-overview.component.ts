import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicTextEditorExampleComponent
} from '../_examples/basic-text-editor-example/basic-text-editor-example.component';
import {
  TextEditorFloatingMenuExampleComponent
} from '../_examples/text-editor-floating-menu-example/text-editor-floating-menu-example.component';

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
