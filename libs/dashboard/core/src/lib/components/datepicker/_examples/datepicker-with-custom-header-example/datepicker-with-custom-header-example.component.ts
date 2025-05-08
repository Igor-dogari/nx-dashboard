import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CustomHeaderComponent } from '@core/components';

@Component({
  selector: 'app-datepicker-with-custom-header-example',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  templateUrl: './datepicker-with-custom-header-example.component.html',
  styleUrl: './datepicker-with-custom-header-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class DatepickerWithCustomHeaderExampleComponent {
  exampleHeader = CustomHeaderComponent;
}
