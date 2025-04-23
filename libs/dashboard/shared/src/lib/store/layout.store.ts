import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withMethods, withState } from '@ngrx/signals';

type VisibilityState = {
  [propName: string]: boolean;
};

const initialState: VisibilityState = {
  root: true
};

export const LayoutSidebarStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('LayoutSidebar'),
  withMethods((store) => ({
    showSidebarVisibility(layoutId: string, isShown: boolean): void {
      updateState(store, 'showSidebar', {
        [layoutId]: isShown
      });
    }
  }))
);
