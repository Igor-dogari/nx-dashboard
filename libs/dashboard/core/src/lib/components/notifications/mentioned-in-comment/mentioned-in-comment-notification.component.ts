import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NotificationInterface } from '@core/models';
import { DicebearComponent } from '@core/components';

@Component({
  selector: 'emr-mentioned-in-comment',
  imports: [MatIcon, DicebearComponent],
  templateUrl: './mentioned-in-comment-notification.component.html',
  styleUrl: './mentioned-in-comment-notification.component.scss',
})
export class MentionedInCommentNotificationComponent {
  notification = input.required<NotificationInterface>();
}
