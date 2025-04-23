import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  BasicBlockStateExampleComponent
} from '../_examples/basic-block-state-example/basic-block-state-example.component';
import {
  BlockStateWithImageExampleComponent
} from '../_examples/block-state-with-image-example/block-state-with-image-example.component';
import {
  BlockStateWithIconExampleComponent
} from '../_examples/block-state-with-icon-example/block-state-with-icon-example.component';
import {
  BlockStateWithActionsExampleComponent
} from '../_examples/block-state-with-actions-example/block-state-with-actions-example.component';
import {
  BlockStateWithCustomIconExampleComponent
} from '../_examples/block-state-with-custom-icon-example/block-state-with-custom-icon-example.component';

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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
