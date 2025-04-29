import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicChipsExampleComponent } from '../_examples/basic-chips-example/basic-chips-example.component';
import {
  ChipsWithInputExampleComponent
} from '../_examples/chips-with-input-example/chips-with-input-example.component';
import {
  ChipsAutocompleteExampleComponent
} from '../_examples/chips-autocomplete-example/chips-autocomplete-example.component';
import {
  ChipsWithIconsExampleComponent
} from '../_examples/chips-with-icons-example/chips-with-icons-example.component';
import {
  ChipsDragAndDropExampleComponent
} from '../_examples/chips-drag-and-drop-example/chips-drag-and-drop-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { StackedChipsExampleComponent } from '../_examples/stacked-chips-example/stacked-chips-example.component';

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
