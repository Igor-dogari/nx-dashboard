import { Component } from '@angular/core';
import {
  AlertComponent,
} from '@core/components';
import { AlertTitleDirective } from '@core/directives';

@Component({
  selector: 'app-alert-with-title-example',
  imports: [AlertTitleDirective, AlertComponent],
  templateUrl: './alert-with-title-example.component.html',
  styleUrl: './alert-with-title-example.component.scss',
})
export class AlertWithTitleExampleComponent {}
