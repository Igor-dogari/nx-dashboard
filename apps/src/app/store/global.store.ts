import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withMethods, withState } from '@ngrx/signals';

export interface GlobalStoreState {
  screenLoading: boolean;
  sidebarHidden: boolean;
  pageTitle: string;
}

const initialGlobalState: GlobalStoreState = {
  screenLoading: true,
  sidebarHidden: false,
  pageTitle: ''
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialGlobalState),
  withDevtools('Global'),
  withMethods((store) => ({
    setScreenLoading(isLoading: boolean) {
      updateState(store, 'setScreenLoading', {
        screenLoading: isLoading
      });
    },
    setPageTitle(pageTitle: string) {
      updateState(store, 'setPageTitle', {
        pageTitle
      });
    }
  }))
);
