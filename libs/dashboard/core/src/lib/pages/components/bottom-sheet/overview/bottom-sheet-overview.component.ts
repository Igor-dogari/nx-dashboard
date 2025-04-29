import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicBottomSheetExampleComponent
} from '../_examples/basic-bottom-sheet-example/basic-bottom-sheet-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicBottomSheetExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './bottom-sheet-overview.component.html',
  styleUrl: './bottom-sheet-overview.component.scss'
})
export class BottomSheetOverviewComponent {

}
