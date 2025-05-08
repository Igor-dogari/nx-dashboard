import { Component } from '@angular/core';
import {
  BasicBlockStateExampleComponent,
  BlockStateWithActionsExampleComponent,
  BlockStateWithCustomIconExampleComponent,
  BlockStateWithIconExampleComponent,
  BlockStateWithImageExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
