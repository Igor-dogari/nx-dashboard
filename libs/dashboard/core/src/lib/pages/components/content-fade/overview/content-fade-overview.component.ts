import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicContentFadeExampleComponent
} from '@core/pages';
import {
  ContentFadeCustomWidthExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  ContentFadeCustomPositionExampleComponent
} from '@core/pages';

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
