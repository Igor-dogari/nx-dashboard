import { Component, computed, inject } from '@angular/core';
import { LAYOUT } from '@core/models';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutSidebarStore } from '@core/store';

@Component({
  selector: 'emr-layout-sidebar',
  exportAs: 'emrLayoutSidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrl: './layout-sidebar.component.scss',
  host: {
    class: 'emr-layout-sidebar',
    '[class.is-hidden]': '!_isShown()',
  },
  standalone: true,
})
export class LayoutSidebarComponent {
  private _parent = inject<LayoutComponent>(LAYOUT);
  private _layoutSidebarStore = inject<any>(LayoutSidebarStore);

  protected _isShown = computed<boolean>(() => {
    if (this._parent.layoutId() in this._layoutSidebarStore) {
      return this._layoutSidebarStore[this._parent.layoutId()]();
    }

    return true;
  });
}
