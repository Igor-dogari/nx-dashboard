import { Component } from '@angular/core';
import {
  BasicNumberInputExampleComponent,
  NumberInputCustomControlsExampleComponent, NumberInputMinMaxExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicNumberInputExampleComponent,
    NumberInputCustomControlsExampleComponent,
    NumberInputMinMaxExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './number-input-overview.component.html',
  styleUrl: './number-input-overview.component.scss'
})
export class NumberInputOverviewComponent {
}
