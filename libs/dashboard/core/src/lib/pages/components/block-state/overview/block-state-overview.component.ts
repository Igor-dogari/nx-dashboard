import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicBlockStateExampleComponent
} from '@core';
import {
  BlockStateWithImageExampleComponent
} from '@core';
import {
  BlockStateWithIconExampleComponent
} from '@core';
import {
  BlockStateWithActionsExampleComponent
} from '@core';
import {
  BlockStateWithCustomIconExampleComponent
} from '@core';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicBlockStateExampleComponent,
    BlockStateWithImageExampleComponent,
    BlockStateWithIconExampleComponent,
    BlockStateWithActionsExampleComponent,
    BlockStateWithCustomIconExampleComponent
  ],
  templateUrl: './block-state-overview.component.html',
  styleUrl: './block-state-overview.component.scss'
})
export class BlockStateOverviewComponent {

}
