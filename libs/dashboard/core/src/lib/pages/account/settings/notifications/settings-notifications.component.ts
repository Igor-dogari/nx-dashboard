import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HorizontalDividerComponent } from '@core';

@Component({
  selector: 'app-notifications',
  imports: [
    MatSlideToggle,
    HorizontalDividerComponent
  ],
  templateUrl: './settings-notifications.component.html',
  styleUrl: './settings-notifications.component.scss'
})
export class SettingsNotificationsComponent {

}
