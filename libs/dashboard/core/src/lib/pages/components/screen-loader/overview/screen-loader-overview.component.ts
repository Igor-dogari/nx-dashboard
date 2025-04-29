import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
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
