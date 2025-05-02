// import { computed, inject } from '@angular/core';
// import {
//   patchState,
//   signalStoreFeature,
//   withComputed,
//   withMethods,
//   withState,
// } from '@ngrx/signals';
// import { setEntities, upsertEntity, withEntities } from '@ngrx/signals/entities';
// import { customerConfig } from './with-paged-entities';
// import { CustomerInterface } from '@app/customers/model';
// import { CustomersStore } from '@app/customers/store';

// export const withForm = () =>
//   signalStoreFeature(
//     withState({
//       // id: 1,
//       // firstname: 'Jessica',
//       // name: 'Trabner',
//       // country: 'AT',
//       // birthdate: '2001-09-02',
//     }),
//     withEntities(customerConfig),
//     withMethods((store) => ({
//       setCustomer(value: CustomerInterface) {
//         patchState(store, upsertEntity(value, customerConfig));
//       },
//     })),
//     withComputed((store) => {
//       const customersStore = inject(CustomersStore);

//       return {
//         currentBookings: computed(() => {
//           const selectedId = customersStore.selectedId();


//           return selectedId;
//         }),
//       };
//     }),
//   );
