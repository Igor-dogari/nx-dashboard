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
  CommentEditorCommandCodeDirective,
  CommentEditorCommandEditLinkDirective,
  CommentEditorCommandLinkDirective,
  CommentEditorCommandUnsetLinkDirective,
  CommentEditorCommandToggleToolbarDirective,
} from '@core/directives';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import {
  CommentEditorBubbleMenuComponent,
  CommentEditorComponent,
  CommentEditorDividerComponent, CommentEditorFooterBarComponent,
  CommentEditorToolbarComponent, IconComponent
} from '@core/components';
import { SafeHtmlPipe } from '@core/pipes';

@Component({
  selector: 'app-comment-editor-with-custom-icons-example',
  imports: [
    CommentEditorDividerComponent,
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
    CommentEditorComponent,
    MatIconButton,
    MatTooltip,
    SafeHtmlPipe,
    IconComponent,
    CommentEditorToolbarComponent,
    CommentEditorBubbleMenuComponent,
    CommentEditorCommandCodeDirective,
    CommentEditorCommandEditLinkDirective,
    CommentEditorCommandLinkDirective,
    CommentEditorCommandUnsetLinkDirective,
    CommentEditorCommandToggleToolbarDirective,
    CommentEditorFooterBarComponent
  ],
  templateUrl: './comment-editor-with-custom-icons-example.component.html',
  styleUrl: './comment-editor-with-custom-icons-example.component.scss'
})
export class CommentEditorWithCustomIconsExampleComponent {
  comments: string[] = [];

  uploadFn = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('/assets/image-viewer/1.jpg');
      }, 3000);
    });
  }

  onSent(content: string): void {
    this.comments.unshift(content);
  }
}
