import {
  Component,
  effect,
  ElementRef,
  inject,
  Input,
  viewChild,
} from '@angular/core';
import { getState } from '@ngrx/signals';
import { LogoComponent } from '@core';
import { GlobalStore, GlobalStoreState } from '../../../../../../../apps/src/app/store';

@Component({
  selector: 'app-screen-loader',
  imports: [LogoComponent],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss',
})
export class ScreenLoaderComponent {
  private _globalStore = inject(GlobalStore);

  @Input()
  src = 'assets/screen-loader.svg';

  @Input()
  srcDark = 'assets/screen-loader-dark.svg';

  @Input()
  loadingText: string;

  readonly _loaderElement = viewChild.required<ElementRef>('loader');

  constructor() {
    const initialState = getState<GlobalStoreState>(this._globalStore);
    effect(() => {
      const currentState = getState<GlobalStoreState>(this._globalStore);

      if (initialState.screenLoading === currentState.screenLoading) {
        return;
      }

      if (currentState.screenLoading) {
        this._show();
      } else {
        this._hide();
      }
    });
  }

  private _show(): void {
    const loaderEl = this._loaderElement().nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'visible';
    loaderEl.style['zIndex'] = '9999999';
  }

  private _hide(): void {
    const loaderEl = this._loaderElement().nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'hidden';
    loaderEl.style['zIndex'] = '-9999999';
  }
}
