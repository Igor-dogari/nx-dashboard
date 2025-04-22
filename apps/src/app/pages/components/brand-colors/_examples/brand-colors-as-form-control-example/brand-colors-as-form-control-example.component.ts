import { Component } from '@angular/core';
import { BrandColorsComponent } from 'core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-colors-as-form-control-example',
  imports: [
    BrandColorsComponent,
    FormsModule
  ],
  templateUrl: './brand-colors-as-form-control-example.component.html',
  styleUrl: './brand-colors-as-form-control-example.component.scss'
})
export class BrandColorsAsFormControlExampleComponent {
  selectedColor = '#4ed7ff';
}
