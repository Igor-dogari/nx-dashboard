import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicScreenLoaderExampleComponent
} from '@core/pages';

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
