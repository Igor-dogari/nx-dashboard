import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@core/components';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbItemIconDirective } from '@core/directives';

@Component({
  selector: 'app-breadcrumbs-with-last-item-as-link-example',
  imports: [
    BreadcrumbItemIconDirective,
    MatIcon,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-last-item-as-link-example.component.html',
  styleUrl: './breadcrumbs-with-last-item-as-link-example.component.scss'
})
export class BreadcrumbsWithLastItemAsLinkExampleComponent {

}
