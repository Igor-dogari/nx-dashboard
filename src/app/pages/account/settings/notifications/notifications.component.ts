import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HorizontalDividerComponent } from 'core';

@Component({
  selector: 'app-notifications',
  imports: [
    MatSlideToggle,
    HorizontalDividerComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
