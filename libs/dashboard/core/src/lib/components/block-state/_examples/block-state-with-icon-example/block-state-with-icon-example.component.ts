import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent,
} from '@core/components';

@Component({
  selector: 'app-block-state-with-icon-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    MatIcon,
    BlockStateIconComponent,
  ],
  templateUrl: './block-state-with-icon-example.component.html',
  styleUrl: './block-state-with-icon-example.component.scss',
})
export class BlockStateWithIconExampleComponent {}
