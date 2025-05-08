import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@core/components';

@Component({
  selector: 'app-basic-breadcrumbs-example',
  imports: [
    BreadcrumbSeparatorComponent,
    BreadcrumbItemComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './basic-breadcrumbs-example.component.html',
  styleUrl: './basic-breadcrumbs-example.component.scss'
})
export class BasicBreadcrumbsExampleComponent {

}
