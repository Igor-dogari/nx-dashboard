import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AlertComponent } from '@core/components';
import {
  AlertActionDirective,
  AlertCloseDirective,
  AlertTitleDirective
} from '@core/directives';

@Component({
  selector: 'app-alert-actions-example',
  imports: [
    MatIcon,
    AlertActionDirective,
    AlertCloseDirective,
    AlertComponent,
    AlertTitleDirective,
  ],
  templateUrl: './alert-actions-example.component.html',
  styleUrl: './alert-actions-example.component.scss',
})
export class AlertActionsExampleComponent {}
