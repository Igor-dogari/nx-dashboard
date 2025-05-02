import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
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
  templateUrl: './notifications-overview.component.html',
  styleUrl: './notifications-overview.component.scss'
})
export class NotificationsOverviewComponent {

}
