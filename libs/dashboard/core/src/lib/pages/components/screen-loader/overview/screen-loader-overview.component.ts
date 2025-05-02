import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicScreenLoaderExampleComponent
} from '../_examples/basic-screen-loader-example/basic-screen-loader-example.component';

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
