import { Component } from '@angular/core';
import { AnnouncementComponent } from '../../announcement/announcement.component';
// import { AnnouncementComponent } from '@core/components';

@Component({
  selector: 'app-announcement-with-icons-example',
  imports: [AnnouncementComponent],
  templateUrl: './announcement-with-icons-example.component.html',
  styleUrl: './announcement-with-icons-example.component.scss',
})
export class AnnouncementWithIconsExampleComponent {}
