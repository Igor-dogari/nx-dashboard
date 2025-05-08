import { Component } from '@angular/core';
import { PageContentDirective } from '@core/directives';
import {
  BasicEmojiPickerExampleComponent, PageComponent, PlaygroundComponent
} from '@core/components';
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
  templateUrl: './emoji-picker-overview.component.html',
  styleUrl: './emoji-picker-overview.component.scss'
})
export class EmojiPickerOverviewComponent {

}
