import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicSuggestionsExampleComponent
} from '../_examples/basic-suggestions-example/basic-suggestions-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicSuggestionsExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './suggestions-overview.component.html',
  styleUrl: './suggestions-overview.component.scss'
})
export class SuggestionsOverviewComponent {

}
