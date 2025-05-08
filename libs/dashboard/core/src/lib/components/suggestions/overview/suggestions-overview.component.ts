import { Component } from '@angular/core';
import { BasicSuggestionsExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
