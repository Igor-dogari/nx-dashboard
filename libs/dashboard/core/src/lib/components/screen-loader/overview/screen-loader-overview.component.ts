import { Component } from '@angular/core';
import { BasicScreenLoaderExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicScreenLoaderExampleComponent
  ],
  templateUrl: './screen-loader-overview.component.html',
  styleUrl: './screen-loader-overview.component.scss'
})
export class ScreenLoaderOverviewComponent {

}
