import { signalStore, withMethods, withState } from '@ngrx/signals';
import { Breadcrumb } from '@elementar-ui/components/breadcrumbs/types';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[],
}

const initialState: BreadcrumbsState = {
  breadcrumbs: []
};

export const BreadcrumbsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('Breadcrumbs'),
  withMethods((store) => ({
    setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
      updateState(store, 'setBreadcrumbs', {
        breadcrumbs
      });
    }
  }))
);
