import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  InviteToEditorFilesInFolderNotificationExampleComponent
} from '@core/pages';
import {
  MentionedInCommentNotificationExampleComponent
} from '@core/pages';

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
