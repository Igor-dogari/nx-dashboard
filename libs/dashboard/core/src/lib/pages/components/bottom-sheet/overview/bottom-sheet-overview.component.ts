import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicBottomSheetExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
