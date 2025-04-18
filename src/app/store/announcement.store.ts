import { signalStore, withMethods, withState } from '@ngrx/signals';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { Announcement } from '@elementar-ui/components/announcement';

export interface AnnouncementState {
  announcement: Announcement | null;
}

const initialState: AnnouncementState = {
  announcement: null,
};

export const AnnouncementStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('Announcement'),
  withMethods((store) => ({
    show(announcement: Announcement): void {
      updateState(store, 'showAnnouncement', { announcement });
    },
    hide() {
      updateState(store, 'hideAnnouncement', { announcement: null });
    },
  })),
);
