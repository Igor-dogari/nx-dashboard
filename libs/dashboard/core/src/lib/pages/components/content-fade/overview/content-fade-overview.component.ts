import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicContentFadeExampleComponent
} from '@core';
import {
  ContentFadeCustomWidthExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  ContentFadeCustomPositionExampleComponent
} from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicContentFadeExampleComponent,
    ContentFadeCustomWidthExampleComponent,
    ContentFadeCustomPositionExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './content-fade-overview.component.html',
  styleUrl: './content-fade-overview.component.scss'
})
export class ContentFadeOverviewComponent {

}
