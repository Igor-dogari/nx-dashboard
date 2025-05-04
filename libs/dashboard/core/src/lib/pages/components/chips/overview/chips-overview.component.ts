import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicChipsExampleComponent } from '@core/pages';
import {
  ChipsWithInputExampleComponent
} from '@core/pages';
import {
  ChipsAutocompleteExampleComponent
} from '@core/pages';
import {
  ChipsWithIconsExampleComponent
} from '@core/pages';
import {
  ChipsDragAndDropExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { StackedChipsExampleComponent } from '@core/pages';

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
