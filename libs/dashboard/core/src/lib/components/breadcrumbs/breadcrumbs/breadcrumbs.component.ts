import { Component, TemplateRef, input, booleanAttribute, contentChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  BreadcrumbActiveItemDefDirective,
  BreadcrumbItemDefDirective,
  BreadcrumbSeparatorDefDirective
} from '@core/directives';

@Component({
  selector: 'emr-breadcrumbs',
  exportAs: 'emrBreadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  host: {
    class: 'emr-breadcrumbs',
    '[class.last-item-as-link]': 'lastItemAsLink()',
  },
  imports: [NgTemplateOutlet],
})
export class BreadcrumbsComponent<T> {
  itemRef = contentChild.required(BreadcrumbItemDefDirective, {
    read: TemplateRef,
  });
  activeItemRef = contentChild.required(BreadcrumbActiveItemDefDirective, {
    read: TemplateRef,
  });
  separatorRef = contentChild.required(BreadcrumbSeparatorDefDirective, {
    read: TemplateRef,
  });
  dataSource = input<T[]>([]);
  lastItemAsLink = input(false, {
    transform: booleanAttribute,
  });
}
