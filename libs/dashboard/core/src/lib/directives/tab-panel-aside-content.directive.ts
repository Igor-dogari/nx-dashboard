import {
  DestroyRef,
  Directive,
  inject, input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TabPanelApiService } from '@core/services';
import { TabPanelAsideComponent } from '@core/components';
import { TAB_PANEL_ASIDE } from '@core/models';

@Directive({
  selector: '[emrTabPanelAsideContent]',
  exportAs: 'emrTabPanelAsideContent'
})
export class TabPanelAsideContentDirective implements OnInit {
  private _aside = inject<TabPanelAsideComponent>(TAB_PANEL_ASIDE, { optional: true });
  private _api = inject(TabPanelApiService);
  private _templateRef = inject(TemplateRef);
  private _viewContainer = inject(ViewContainerRef);
  private _destroyRef = inject(DestroyRef);

  id = input<any>(this._aside ? this._aside.nextId++ : null, {
    alias: 'emrTabPanelAsideContent'
  });

  ngOnInit() {
    if (this._api.isActive(this.id())) {
      this._show();
    } else {
      this._hide();
    }

    this._api.itemIdChanged
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(id => {
        if (this.id() === id) {
          this._show();
        } else {
          this._hide();
        }
      })
    ;
  }

  private _show() {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef);
  }

  private _hide() {
    this._viewContainer.clear();
  }
}
