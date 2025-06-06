import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent, IconComponent
} from '@core/components';

@Component({
  selector: 'app-block-state-with-custom-icon-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateIconComponent,
    IconComponent
  ],
  templateUrl: './block-state-with-custom-icon-example.component.html',
  styleUrl: './block-state-with-custom-icon-example.component.scss'
})
export class BlockStateWithCustomIconExampleComponent {

}
