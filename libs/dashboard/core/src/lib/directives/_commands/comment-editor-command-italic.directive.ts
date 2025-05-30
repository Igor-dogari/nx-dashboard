import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '../../models/comment-editor.types';

@Directive({
  selector: '[emrCommentEditorCommandItalic]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleItalic')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('italic')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandItalicDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleItalic');
  }
}
