import { Component } from '@angular/core';
import {
  BasicCommentEditorExampleComponent,
  CommentEditorCancelButtonAlwaysVisibleExampleComponent,
  CommentEditorCustomButtonLabelsExampleComponent,
  CommentEditorWithCustomIconsExampleComponent,
  CommentEditorWithFullViewModeExampleComponent, CommentEditorWithMaxContentHeightExampleComponent,
  CommentEditorWithToolbarExampleComponent,
  CommentEditorWithUploadErrorExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
