import { inject, Injectable } from '@angular/core';
import { GlobalStore } from '../../../../src/app/store';

@Injectable({
  providedIn: 'root'
})
export class ScreenLoaderService {
  private _globalStore = inject(GlobalStore);

  show(): void {
    this._globalStore.setScreenLoading(true);
  }

  hide(): void {
    this._globalStore.setScreenLoading(false);
  }
}
