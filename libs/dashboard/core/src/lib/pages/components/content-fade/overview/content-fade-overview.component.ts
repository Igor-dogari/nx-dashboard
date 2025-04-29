import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicContentFadeExampleComponent
} from '../_examples/basic-content-fade-example/basic-content-fade-example.component';
import {
  ContentFadeCustomWidthExampleComponent
} from '../_examples/content-fade-custom-width-example/content-fade-custom-width-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import {
  ContentFadeCustomPositionExampleComponent
} from '../_examples/content-fade-custom-position-example/content-fade-custom-position-example.component';

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
