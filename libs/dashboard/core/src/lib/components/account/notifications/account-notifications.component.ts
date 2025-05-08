import { Component } from '@angular/core';
import {
  NotificationControlsDefDirective,
  NotificationDefDirective,
  NotificationPropsDirective,
  PageContentDirective,
} from '@core/directives';
import { MatIcon } from '@angular/material/icon';
import { NotificationInterface } from '@core/models';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import {
  InviteToEditFilesInFolderNotificationComponent,
  MentionedInCommentNotificationComponent,
  NotificationListComponent,
  PageComponent,
} from '@core/components';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    NotificationListComponent,
    NotificationDefDirective,
    InviteToEditFilesInFolderNotificationComponent,
    MentionedInCommentNotificationComponent,
    NotificationPropsDirective,
    MatIcon,
    NotificationControlsDefDirective,
    MatMenu,
    MatMenuItem,
    MatIconButton,
    MatMenuTrigger,
  ],
  templateUrl: './account-notifications.component.html',
  styleUrl: './account-notifications.component.scss',
})
export class AccountNotificationsComponent {
  notifications: NotificationInterface[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: '/assets/avatars/6.svg',
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: '/assets/avatars/4.svg',
      },
      payload: {
        content: 'what did you say?',
      },
      isNew: true,
      type: 'mentionedInComment',
      createdAt: '1 hour ago',
    },
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: '/assets/avatars/3.svg',
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: '/assets/avatars/1.svg',
      },
      payload: {
        folderName: 'My New Project',
      },
      isNew: true,
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago',
    },
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: '/assets/avatars/7.svg',
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: '/assets/avatars/8.svg',
      },
      payload: {
        content: 'what did you say?',
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago',
    },
  ];
}
