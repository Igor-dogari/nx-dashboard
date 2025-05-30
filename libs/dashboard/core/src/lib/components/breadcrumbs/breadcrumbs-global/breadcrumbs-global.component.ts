import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  inject,
  input,
  TemplateRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbSeparatorComponent } from '../breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbTitleComponent } from '../breadcrumb-title/breadcrumb-title.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { MatIcon } from '@angular/material/icon';
import { NgTemplateOutlet } from '@angular/common';
import { Breadcrumb, BreadcrumbsStore } from '@core/store';
import { BreadcrumbItemIconDefDirective, BreadcrumbItemIconDirective } from '@core/directives';

@Component({
  selector: 'emr-breadcrumbs-global',
  exportAs: 'emrBreadcrumbsGlobal',
  imports: [
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbTitleComponent,
    BreadcrumbsComponent,
    RouterLink,
    BreadcrumbItemIconDirective,
    MatIcon,
    NgTemplateOutlet,
  ],
  templateUrl: './breadcrumbs-global.component.html',
  styleUrl: './breadcrumbs-global.component.scss',
  host: {
    class: 'emr-breadcrumbs-global',
  },
})
export class BreadcrumbsGlobalComponent {
  private _breadcrumbsStore = inject(BreadcrumbsStore);
  protected _itemIconDef = contentChild(BreadcrumbItemIconDefDirective);

  breadcrumbs = computed<Breadcrumb[]>(() => {
    return this._breadcrumbsStore.breadcrumbs();
  });
  lastItemAsLink = input(false, {
    transform: booleanAttribute,
  });
  separator = input('/');

  get iconTemplateRef(): TemplateRef<any> {
    return this._itemIconDef()?.templateRef as TemplateRef<any>;
  }
}
