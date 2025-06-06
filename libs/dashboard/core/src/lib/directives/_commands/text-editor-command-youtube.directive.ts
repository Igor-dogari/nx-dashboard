import { DestroyRef, Directive, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TEXT_EDITOR, TextEditor } from '@core/models';
import { TextEditorYoutubeDialogComponent } from '@core/components';

@Directive({
  selector: '[emrTextEditorCommandYoutube]',
  exportAs: 'emrTextEditorCommandYoutube',
  host: {
    '[disabled]': `textEditor && textEditor.api.isCommandDisabled('toggleBlockquote')`,
    '[class.active]': `textEditor && textEditor.api.isActive('blockquote')`,
    '(click)': `onClick()`
  }
})
export class TextEditorCommandYoutubeDirective {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);
  private _dialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);

  protected onClick(): void {
    const dialogRef = this._dialog.open(TextEditorYoutubeDialogComponent, {
      data: {
        linkUrl: (this.textEditor.api.editor().getAttributes('iframe') as HTMLIFrameElement).src
      }
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((linkUrl: string) => {
        if (typeof linkUrl === 'undefined') {
          return;
        }

        this.textEditor.api.editor().commands.setYoutubeVideo({
          src: linkUrl
        });
      })
      ;
  }
}
