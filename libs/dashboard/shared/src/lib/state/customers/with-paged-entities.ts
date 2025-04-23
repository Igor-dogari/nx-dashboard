import {
  patchState,
  signalStoreFeature,
  type,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject, ProviderToken } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, Observable, pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
import {
  entityConfig,
  upsertEntities,
  upsertEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { withLoading } from './with-loading';
import { updateState } from '@angular-architects/ngrx-toolkit';

export interface CustomerInterface {
  id: number;
  firstname: string;
  name: string;
  country: string;
  birthdate: string;
}

export interface WithPagedEntityState {
  page: number;
  total: number;
  selectedId: number | undefined;
}

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

interface Post {
  id: string;
  title: string;
  author: User;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}

export const customerConfig = entityConfig({
  // entity: type<CustomerInterface>(),
  entity: type<Post>(),
  collection: 'customer',
  selectId: (customer) => customer.id,
});

export const withPagedEntities = (
  Loader: ProviderToken<{
    load: (page: number) => Observable<Post[]>;
    // load: (page: number) => Observable<{
    //   content: CustomerInterface[];
    //   page: number;
    //   total: number;
    // }>;
  }>,
) => {
  return signalStoreFeature(
    withLoading(),
    withState<WithPagedEntityState>({
      page: 0,
      total: 0,
      selectedId: undefined,
    }),
    withEntities(customerConfig),
    withMethods((state) => {
      const loader = inject(Loader);
      return {
        load: rxMethod<number>(
          pipe(
            tap((page) => patchState(state, { page })),
            debounceTime(500),
            distinctUntilChanged(),
            tap(() => state.setLoading(true)),
            switchMap((page) => loader.load(page)),
            tap(() => state.setLoading(false)),
            tapResponse({
              next: (response) => {
                // const start = (response.page - 1) * 5;
                // const end = start + 5;
                // patchState(state, removeAllEntities(customerConfig));
                // patchState(state, removeEntity(1, customerConfig));
                // patchState(state, setEntities(response.content.slice(start, end), customerConfig), {
                //   page: response.page,
                //   total: response.total,
                // });
                updateState(
                  state,
                  'setEntities',
                  upsertEntities(response, customerConfig),
                );
              },
              error: console.error,
            }),
          ),
        ),
        nextPage() {
          const page = state.page();
          if (page >= state.total()) {
            return;
          }

          this.load(page + 1);
        },
        previousPage() {
          const page = state.page();
          if (page <= 1) {
            return;
          }

          this.load(page - 1);
        },
        select(id: number) {
          patchState(state, { selectedId: id });
        },
        unselect() {
          patchState(state, { selectedId: undefined });
        },
        upsertCustomer(value: Post) {
          patchState(state, upsertEntity(value, customerConfig));
        },
      };
    }),
    withComputed((state) => {
      return {
        pagedCustomers: computed(() => {
          const selectedId = state.selectedId();

          return {
            customers: Object.values(state.customerEntityMap()).map(
              (entity) => ({
                ...entity,
                selected: entity.id === selectedId?.toString(),
              }),
            ),
            page: state.page(),
            total: state.total(),
          };
        }),
      };
    }),
  );
};
