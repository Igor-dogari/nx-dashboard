import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbsComponent,
  BreadcrumbSeparatorComponent,
} from '@core/components';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbItemIconDirective } from '@core/directives';

@Component({
  selector: 'app-breadcrumbs-with-icons-example',
  imports: [
    MatIcon,
    BreadcrumbItemIconDirective,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent,
  ],
  templateUrl: './breadcrumbs-with-icons-example.component.html',
  styleUrl: './breadcrumbs-with-icons-example.component.scss',
})
export class BreadcrumbsWithIconsExampleComponent {}
