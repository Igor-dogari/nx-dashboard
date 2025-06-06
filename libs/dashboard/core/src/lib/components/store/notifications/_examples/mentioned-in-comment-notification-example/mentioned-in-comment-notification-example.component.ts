import { Component } from '@angular/core';
import { NotificationInterface } from '@core/models';
import { NotificationDefDirective } from '@core/directives';
import { MentionedInCommentNotificationComponent, NotificationListComponent } from '@core/components';

@Component({
  selector: 'app-mentioned-in-comment-notification-example',
  imports: [
    NotificationDefDirective,
    NotificationListComponent,
    MentionedInCommentNotificationComponent
  ],
  templateUrl: './mentioned-in-comment-notification-example.component.html',
  styleUrl: './mentioned-in-comment-notification-example.component.scss'
})
export class MentionedInCommentNotificationExampleComponent {
  notifications: NotificationInterface[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: '/assets/avatars/5.svg'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: '/assets/avatars/6.svg'
      },
      payload: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    }
  ];
}
