import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  AvatarComponent,
  SuggestionBlockComponent,
  SuggestionComponent,
  SuggestionIconDirective,
  SuggestionsComponent,
  SuggestionThumbDirective,
} from '@core';

@Component({
  selector: 'app-basic-suggestions-example',
  imports: [
    MatButton,
    MatIcon,
    SuggestionBlockComponent,
    SuggestionComponent,
    SuggestionIconDirective,
    SuggestionThumbDirective,
    SuggestionsComponent,
    AvatarComponent,
  ],
  templateUrl: './basic-suggestions-example.component.html',
  styleUrl: './basic-suggestions-example.component.scss',
})
export class BasicSuggestionsExampleComponent {}
