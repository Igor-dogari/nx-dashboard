import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicChipsExampleComponent } from '@core';
import {
  ChipsWithInputExampleComponent
} from '@core';
import {
  ChipsAutocompleteExampleComponent
} from '@core';
import {
  ChipsWithIconsExampleComponent
} from '@core';
import {
  ChipsDragAndDropExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { StackedChipsExampleComponent } from '@core';

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
