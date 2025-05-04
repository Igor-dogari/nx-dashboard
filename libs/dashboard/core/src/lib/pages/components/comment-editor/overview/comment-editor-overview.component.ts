import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicCommentEditorExampleComponent
} from '@core';
import {
  CommentEditorWithToolbarExampleComponent
} from '@core';
import {
  CommentEditorWithFullViewModeExampleComponent
} from '@core';
import {
  CommentEditorWithUploadErrorExampleComponent
} from '@core';
import {
  CommentEditorWithCustomIconsExampleComponent
} from '@core';
import {
  CommentEditorCancelButtonAlwaysVisibleExampleComponent
} from '@core';
import {
  CommentEditorCustomButtonLabelsExampleComponent
} from '@core';
import {
  CommentEditorWithMaxContentHeightExampleComponent
} from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCommentEditorExampleComponent,
    CommentEditorWithToolbarExampleComponent,
    CommentEditorWithFullViewModeExampleComponent,
    CommentEditorWithUploadErrorExampleComponent,
    CommentEditorWithCustomIconsExampleComponent,
    CommentEditorCancelButtonAlwaysVisibleExampleComponent,
    CommentEditorCustomButtonLabelsExampleComponent,
    CommentEditorWithMaxContentHeightExampleComponent
  ],
  templateUrl: './comment-editor-overview.component.html',
  styleUrl: './comment-editor-overview.component.scss'
})
export class CommentEditorOverviewComponent {

}
