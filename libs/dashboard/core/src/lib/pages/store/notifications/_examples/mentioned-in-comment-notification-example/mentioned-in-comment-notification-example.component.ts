import { Component } from '@angular/core';
import { MentionedInCommentNotification } from 'libs/dashboard/core/src/lib/@widgets/notifications/mentioned-in-comment/mentioned-in-comment.notification';
import { NotificationDefDirective } from 'libs/dashboard/core/src/lib/notifications/notification-def.directive';
import { NotificationListComponent } from 'libs/dashboard/core/src/lib/notifications/notification-list/notification-list.component';
import { Notification } from 'libs/dashboard/core/src/lib/notifications/notification.interface';

@Component({
  selector: 'app-mentioned-in-comment-notification-example',
  imports: [
    NotificationDefDirective,
    NotificationListComponent,
    MentionedInCommentNotification,
  ],
  templateUrl: './mentioned-in-comment-notification-example.component.html',
  styleUrl: './mentioned-in-comment-notification-example.component.scss',
})
export class MentionedInCommentNotificationExampleComponent {
  notifications: Notification[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'assets/avatars/5.svg',
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'assets/avatars/6.svg',
      },
      payload: {
        content: 'what did you say?',
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago',
    },
  ];
}
