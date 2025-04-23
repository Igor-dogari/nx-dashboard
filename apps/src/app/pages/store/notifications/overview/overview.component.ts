import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  InviteToEditorFilesInFolderNotificationExampleComponent
} from '../_examples/invite-to-editor-files-in-folder-notification-example/invite-to-editor-files-in-folder-notification-example.component';
import {
  MentionedInCommentNotificationExampleComponent
} from '../_examples/mentioned-in-comment-notification-example/mentioned-in-comment-notification-example.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    InviteToEditorFilesInFolderNotificationExampleComponent,
    MentionedInCommentNotificationExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
