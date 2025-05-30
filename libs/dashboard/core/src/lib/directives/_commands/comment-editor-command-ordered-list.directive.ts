import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '../../models/comment-editor.types';

@Directive({
  selector: '[emrCommentEditorCommandOrderedList]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleOrderedList')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('orderedList')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandOrderedListDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleOrderedList');
  }
}
