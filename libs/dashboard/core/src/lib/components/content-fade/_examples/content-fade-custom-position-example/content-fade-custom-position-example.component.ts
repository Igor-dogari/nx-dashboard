import { Component } from '@angular/core';
import { ContentFadeComponent } from '@core/components';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ContentFadePosition } from '@core/models';

@Component({
  selector: 'app-content-fade-custom-position-example',
  imports: [
    ContentFadeComponent,
    MatRadioGroup,
    MatRadioButton,
    FormsModule
  ],
  templateUrl: './content-fade-custom-position-example.component.html',
  styleUrl: './content-fade-custom-position-example.component.scss'
})
export class ContentFadeCustomPositionExampleComponent {
  position: ContentFadePosition = 'both';
}
