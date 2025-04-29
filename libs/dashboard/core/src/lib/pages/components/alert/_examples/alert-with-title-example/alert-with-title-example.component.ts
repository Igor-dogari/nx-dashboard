import { Component } from '@angular/core';
import {
  AlertComponent,
  AlertTitleDirective,
} from '@core';

@Component({
  selector: 'app-alert-with-title-example',
  imports: [AlertTitleDirective, AlertComponent],
  templateUrl: './alert-with-title-example.component.html',
  styleUrl: './alert-with-title-example.component.scss',
})
export class AlertWithTitleExampleComponent {}
