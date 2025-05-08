import { Component } from '@angular/core';
import {
  InviteToEditorFilesInFolderNotificationExampleComponent, MentionedInCommentNotificationExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
