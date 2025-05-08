import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent, BreadcrumbsComponent, BreadcrumbSeparatorComponent,
  BreadcrumbTitleComponent
} from '@core/components';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbItemIconDirective } from '@core/directives';

@Component({
  selector: 'app-breadcrumbs-with-titles-example',
  imports: [
    BreadcrumbItemIconDirective,
    MatIcon,
    BreadcrumbTitleComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbItemComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-titles-example.component.html',
  styleUrl: './breadcrumbs-with-titles-example.component.scss'
})
export class BreadcrumbsWithTitlesExampleComponent {

}
