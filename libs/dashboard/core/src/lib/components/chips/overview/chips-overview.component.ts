import { Component } from '@angular/core';
import {
  BasicChipsExampleComponent,
  ChipsAutocompleteExampleComponent, ChipsDragAndDropExampleComponent, ChipsWithIconsExampleComponent,
  ChipsWithInputExampleComponent, PageComponent,
  PlaygroundComponent, StackedChipsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PlaygroundComponent,
    BasicChipsExampleComponent,
    ChipsWithInputExampleComponent,
    ChipsAutocompleteExampleComponent,
    ChipsWithIconsExampleComponent,
    ChipsDragAndDropExampleComponent,
    PageComponent,
    PageContentDirective,
    StackedChipsExampleComponent
  ],
  templateUrl: './chips-overview.component.html',
  styleUrl: './chips-overview.component.scss'
})
export class ChipsOverviewComponent {

}
