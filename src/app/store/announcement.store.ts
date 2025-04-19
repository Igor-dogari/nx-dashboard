import { signalStore, withMethods, withState } from '@ngrx/signals';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

export type AnnouncementVariant = 'neutral' | 'negative' | 'warning' | 'positive' | 'informative' | string;

export interface Announcement {
  iconName?: string;
  variant: AnnouncementVariant;
  message: string;
}

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
