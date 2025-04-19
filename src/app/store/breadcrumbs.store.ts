import { signalStore, withMethods, withState } from '@ngrx/signals';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

export interface Breadcrumb {
  id: any;
  name?: string;
  title?: string;
  type: 'link' | 'separator' | null | string;
  icon?: string;
  route?: string;
}

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbsState = {
  breadcrumbs: [],
};

export const BreadcrumbsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('Breadcrumbs'),
  withMethods((store) => ({
    setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
      updateState(store, 'setBreadcrumbs', {
        breadcrumbs,
      });
    },
  })),
);
