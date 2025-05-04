import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicBlockStateExampleComponent
} from '@core/pages';
import {
  BlockStateWithImageExampleComponent
} from '@core/pages';
import {
  BlockStateWithIconExampleComponent
} from '@core/pages';
import {
  BlockStateWithActionsExampleComponent
} from '@core/pages';
import {
  BlockStateWithCustomIconExampleComponent
} from '@core/pages';

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
