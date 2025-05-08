import { Component } from '@angular/core';
import {
  BasicContentFadeExampleComponent, ContentFadeCustomPositionExampleComponent,
  ContentFadeCustomWidthExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
