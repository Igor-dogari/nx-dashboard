import { Component } from '@angular/core';
import { PageContentDirective } from '@shared';
import {
  BasicEmojiPickerExampleComponent
} from '../_examples/basic-emoji-picker-example/basic-emoji-picker-example.component';
import { PlaygroundComponent } from '@shared';
import { PageComponent } from '@shared';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-overview',
  imports: [
    PageContentDirective,
    BasicEmojiPickerExampleComponent,
    PlaygroundComponent,
    PageComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
