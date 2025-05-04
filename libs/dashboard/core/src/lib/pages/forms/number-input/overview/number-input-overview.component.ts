import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicNumberInputExampleComponent
} from '@core';
import {
  NumberInputCustomControlsExampleComponent
} from '@core';
import {
  NumberInputMinMaxExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
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
