import { signalStore, withMethods, withState } from '@ngrx/signals';
import { Incident } from '@elementar-ui/components/incidents/types';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

export interface IncidentsState {
  incidents: Incident[],
  title: string;
  description: string;
}

const initialState: IncidentsState = {
  incidents: [],
  title: '',
  description: '',
};

export const IncidentsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('Incidents'),
  withMethods((store) => ({
    show(state: IncidentsState): void {
      updateState(store, 'showIncidents', {
        ...state
      });
    },
    hide(): void {
      updateState(store, 'hideIncidents', {
        incidents: []
      });
    }
  }))
);
