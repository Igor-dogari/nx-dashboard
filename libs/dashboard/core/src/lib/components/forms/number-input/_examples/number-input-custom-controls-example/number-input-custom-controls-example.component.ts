import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  NumberInputComponent
} from '@core/components';
import { DecreaseControlDirective, IncreaseControlDirective } from '@core/directives';

@Component({
  selector: 'app-number-input-custom-controls-example',
  imports: [
    MatFormField,
    MatIcon,
    MatLabel,
    DecreaseControlDirective,
    IncreaseControlDirective,
    NumberInputComponent
  ],
  templateUrl: './number-input-custom-controls-example.component.html',
  styleUrl: './number-input-custom-controls-example.component.scss'
})
export class NumberInputCustomControlsExampleComponent {

}
