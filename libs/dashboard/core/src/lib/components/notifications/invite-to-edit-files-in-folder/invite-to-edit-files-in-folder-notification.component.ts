import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NotificationInterface } from '@core/models';
import { DicebearComponent } from '@core/components';

@Component({
  selector: 'emr-invite-to-edit-files-in-folder',
  imports: [MatIcon, DicebearComponent],
  templateUrl: './invite-to-edit-files-in-folder-notification.component.html',
  styleUrl: './invite-to-edit-files-in-folder-notification.component.scss',
})
export class InviteToEditFilesInFolderNotificationComponent {
  notification = input.required<NotificationInterface>();
}
