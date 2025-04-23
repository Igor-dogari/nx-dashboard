import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
