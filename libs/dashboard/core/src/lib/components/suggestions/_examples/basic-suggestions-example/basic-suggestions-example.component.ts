import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@core/components';
import {
  SuggestionBlockComponent,
  SuggestionComponent,
  SuggestionsComponent,
} from '@core/components';
import { SuggestionIconDirective, SuggestionThumbDirective } from '@core/directives';

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
