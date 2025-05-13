import { Component } from '@angular/core';
import { InviteToEditFilesInFolderNotification } from 'libs/dashboard/core/src/lib/@widgets/notifications/invite-to-edit-files-in-folder/invite-to-edit-files-in-folder.notification';
import { NotificationDefDirective } from 'libs/dashboard/core/src/lib/notifications/notification-def.directive';
import { NotificationListComponent } from 'libs/dashboard/core/src/lib/notifications/notification-list/notification-list.component';
import { Notification } from 'libs/dashboard/core/src/lib/notifications/notification.interface';

@Component({
  selector: 'app-invite-to-editor-files-in-folder-notification-example',
  imports: [
    InviteToEditFilesInFolderNotification,
    NotificationDefDirective,
    NotificationListComponent
  ],
  templateUrl: './invite-to-editor-files-in-folder-notification-example.component.html',
  styleUrl: './invite-to-editor-files-in-folder-notification-example.component.scss'
})
export class InviteToEditorFilesInFolderNotificationExampleComponent {
  notifications: Notification[] = [
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'assets/avatars/1.svg'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'assets/avatars/6.svg'
      },
      payload: {
        folderName: 'My New Project'
      },
      isNew: true,
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    }
  ];
}
