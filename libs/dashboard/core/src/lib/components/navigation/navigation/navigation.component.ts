import {
  afterNextRender,
  Component, ElementRef,
  inject, Renderer2,
  contentChildren,
  SimpleChanges,
  input,
  OnChanges, output, forwardRef
} from '@angular/core';
import { NavigationApiService } from '@core/services';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NAVIGATION, NavigationItem } from '@core/models';

@Component({
  selector: 'emr-navigation',
  exportAs: 'emrNavigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [
    NavigationApiService,
    {
      provide: NAVIGATION,
      useExisting: forwardRef(() => NavigationComponent),
    }
  ],
  host: {
    'class': 'emr-navigation'
  }
})
export class NavigationComponent implements OnChanges {
  readonly api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  readonly _items = contentChildren(NavigationItemComponent, { descendants: true });

  activeKey = input<any>();
  theme = input();

  readonly itemClicked = output<NavigationItem>();

  constructor() {
    // scroll to the active item if it is not visible in the viewport
    afterNextRender(() => {
      this._items().forEach((item: NavigationItemComponent) => {
        if (item.active) {
          let parentElement = this._elementRef.nativeElement.parentNode || null;
          const itemElement = item._hostElement.nativeElement as HTMLElement;

          while (parentElement !== null) {
            if (this._hasScroll(parentElement)) {
              if (!this._isScrolledIntoView(itemElement, parentElement)) {
                const parentRect = parentElement.getBoundingClientRect();
                const elementRect = itemElement.getBoundingClientRect();
                parentElement.scrollTop = elementRect.top - parentRect.height / 2;
              }

              parentElement = null;
            } else {
              parentElement = parentElement.parentNode || null;
            }
          }
        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeKey']) {
      this.api.activateItem(changes['activeKey'].currentValue);
    }

    if (changes['theme']) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'data-theme', changes['theme'].currentValue);
    }
  }

  private _hasScroll(element: HTMLElement): boolean {
    if (!element.getBoundingClientRect) {
      return false;
    }

    return Math.ceil(element.scrollHeight) > Math.ceil(element.getBoundingClientRect().height);
  }

  private _isScrolledIntoView(element: HTMLElement, parent: HTMLElement) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return (elementRect.top >= 0) && (elementRect.bottom <= parentRect.height);
  }
}
