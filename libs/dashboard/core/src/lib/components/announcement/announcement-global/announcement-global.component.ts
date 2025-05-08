import { Component, computed, inject, output } from '@angular/core';
// import { AnnouncementComponent } from '@core/components';
import { Announcement, AnnouncementStore } from '@core/store';
import { AnnouncementComponent } from '../announcement/announcement.component';


@Component({
  selector: 'emr-announcement-global',
  exportAs: 'emrAnnouncementGlobal',
  imports: [AnnouncementComponent],
  templateUrl: './announcement-global.component.html',
  styleUrl: './announcement-global.component.scss',
  standalone: true,
})
export class AnnouncementGlobalComponent {
  private _announcementStore = inject(AnnouncementStore);

  announcement = computed<Announcement | null>(() => {
    return this._announcementStore.announcement();
  });

  readonly announcementClose = output<void>();

  onClose() {
    this._announcementStore.hide();
  }
}
