import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicCommentEditorExampleComponent
} from '@core/pages';
import {
  CommentEditorWithToolbarExampleComponent
} from '@core/pages';
import {
  CommentEditorWithFullViewModeExampleComponent
} from '@core/pages';
import {
  CommentEditorWithUploadErrorExampleComponent
} from '@core/pages';
import {
  CommentEditorWithCustomIconsExampleComponent
} from '@core/pages';
import {
  CommentEditorCancelButtonAlwaysVisibleExampleComponent
} from '@core/pages';
import {
  CommentEditorCustomButtonLabelsExampleComponent
} from '@core/pages';
import {
  CommentEditorWithMaxContentHeightExampleComponent
} from '@core/pages';

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
