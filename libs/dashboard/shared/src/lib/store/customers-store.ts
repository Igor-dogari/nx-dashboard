import { getState, signalStore, withHooks } from '@ngrx/signals';
import { effect } from '@angular/core';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withLocalStorageSync, withPagedEntities } from '@shared';
import { CustomersService } from '../services/customers.service';

export const CustomersStore = signalStore(
  { providedIn: 'root' },
  withPagedEntities(CustomersService),
  withLocalStorageSync('customers'),
  withDevtools('customers'),
  // withForm(),
  withHooks({
    onInit(store) {
      effect(() => {
        // 👇 The effect is re-executed on state change.
        // const state = getState(store);
        // console.log('counter state', state);
      });

      // if (store.loadFromLocalStorage()) {
      //   return;
      // }
      store.load(1);
    },
  }),
);
