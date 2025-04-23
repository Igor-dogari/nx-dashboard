import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DicebearComponent, Notification } from '@core';

@Component({
  selector: 'emr-mentioned-in-comment',
  imports: [MatIcon, DicebearComponent],
  templateUrl: './mentioned-in-comment.notification.html',
  styleUrl: './mentioned-in-comment.notification.scss',
})
export class MentionedInCommentNotification {
  notification = input.required<Notification>();
}
