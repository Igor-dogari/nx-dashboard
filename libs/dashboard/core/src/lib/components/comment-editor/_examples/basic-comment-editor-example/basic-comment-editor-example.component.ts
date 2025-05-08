import { Component } from '@angular/core';
import {
  CommentEditorCommandBlockquoteDirective,
  CommentEditorCommandBoldDirective,
  CommentEditorCommandBulletListDirective,
  CommentEditorCommandCodeBlockDirective,
  CommentEditorCommandDirective,
  CommentEditorCommandImageDirective,
  CommentEditorCommandItalicDirective,
  CommentEditorCommandOrderedListDirective,
  CommentEditorCommandStrikeDirective,
  CommentEditorCommandYoutubeDirective,
  CommentEditorCommandLinkDirective,
  CommentEditorCommandCodeDirective,
  CommentEditorCommandUnsetLinkDirective,
  CommentEditorCommandEditLinkDirective,
  CommentEditorCommandToggleToolbarDirective,
} from '@core/directives';
import {
  CommentEditorBubbleMenuComponent,
  CommentEditorComponent,
  CommentEditorDividerComponent, CommentEditorFooterBarComponent, CommentEditorToolbarComponent,
} from '@core/components';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { SafeHtmlPipe } from '@core/pipes';

@Component({
  selector: 'app-basic-comment-editor-example',
  imports: [
    CommentEditorComponent,
    CommentEditorDividerComponent,
    CommentEditorBubbleMenuComponent,
    SafeHtmlPipe,
    MatIcon,
    MatIconButton,
    MatTooltip,
    CommentEditorCommandDirective,
    CommentEditorCommandBoldDirective,
    CommentEditorCommandItalicDirective,
    CommentEditorCommandStrikeDirective,
    CommentEditorCommandBulletListDirective,
    CommentEditorCommandOrderedListDirective,
    CommentEditorCommandBlockquoteDirective,
    CommentEditorCommandCodeBlockDirective,
    CommentEditorCommandImageDirective,
    CommentEditorCommandYoutubeDirective,
    CommentEditorToolbarComponent,
    CommentEditorCommandLinkDirective,
    CommentEditorCommandCodeDirective,
    CommentEditorCommandUnsetLinkDirective,
    CommentEditorCommandEditLinkDirective,
    CommentEditorFooterBarComponent,
    CommentEditorCommandToggleToolbarDirective
  ],
  templateUrl: './basic-comment-editor-example.component.html',
  styleUrl: './basic-comment-editor-example.component.scss'
})
export class BasicCommentEditorExampleComponent {
  comments: string[] = [];

  uploadFn = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('/assets/image-viewer/1.jpg');
      }, 3000);
    });

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject('Upload Error');
    //   }, 3000);
    // });

    // upload to a server
    // return new Promise((resolve, reject) => {
    //   const formData = new FormData();
    //   formData.append('image', file);
    //   this._api
    //     .post(`upload`, formData)
    //     .subscribe((res: any) => {
    //       resolve(res.url);
    //     })
    //   ;
    // });
  }

  onSent(content: string): void {
    this.comments.unshift(content);
  }
}
