import { Component } from '@angular/core';
import { BasicBottomSheetExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
