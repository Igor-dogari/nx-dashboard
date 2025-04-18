import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withMethods, withState } from '@ngrx/signals';

export interface Announcement {
  variant: string;
  message: string;
  iconName?: string;
}

type AppState = {
  announcement: Announcement | null;
};

const initialState: AppState = {
  announcement: null
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('App'),
  withMethods((store) => ({
    setAnnouncement(announcement: Announcement | null): void {
      updateState(store, 'setAnnouncement', () => ({ announcement }));
    },
  }))
);
