import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinInputComponent } from '@core/components';

@Component({
  selector: 'app-pin-input-with-placeholder-example',
  imports: [
    FormsModule,
    PinInputComponent
  ],
  templateUrl: './pin-input-with-placeholder-example.component.html',
  styleUrl: './pin-input-with-placeholder-example.component.scss'
})
export class PinInputWithPlaceholderExampleComponent {
  value = '';
}
