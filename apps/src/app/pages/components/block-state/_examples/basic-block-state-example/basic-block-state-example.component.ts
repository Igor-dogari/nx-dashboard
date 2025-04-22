import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateTitleComponent,
} from 'core';

@Component({
  selector: 'app-basic-block-state-example',
  imports: [
    BlockStateComponent,
    BlockStateTitleComponent,
    BlockStateContentComponent,
  ],
  templateUrl: './basic-block-state-example.component.html',
  styleUrl: './basic-block-state-example.component.scss',
})
export class BasicBlockStateExampleComponent {}
