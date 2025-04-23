import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicSuggestionsExampleComponent
} from '../_examples/basic-suggestions-example/basic-suggestions-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicSuggestionsExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
