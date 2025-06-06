import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmojiPickerComponent } from '@core/components';
import { EmojiPickerTriggerForDirective } from '@core/directives';

@Component({
  selector: 'app-basic-emoji-picker-example',
  imports: [
    MatButton,
    EmojiPickerComponent,
    EmojiPickerTriggerForDirective
  ],
  templateUrl: './basic-emoji-picker-example.component.html',
  styleUrl: './basic-emoji-picker-example.component.scss'
})
export class BasicEmojiPickerExampleComponent {
  selectedEmoji = signal<string | null>(null);

  onEmojiSelected(emoji: string) {
    this.selectedEmoji.set(emoji);
  }
}
