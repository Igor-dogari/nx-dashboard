import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from '@core/components';

@Component({
  selector: 'app-basic-color-picker-example',
  imports: [
    FormsModule,
    ColorPickerComponent
  ],
  templateUrl: './basic-color-picker-example.component.html',
  styleUrl: './basic-color-picker-example.component.scss'
})
export class BasicColorPickerExampleComponent {
  color = 'red';
}
