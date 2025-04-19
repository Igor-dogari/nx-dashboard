import { Component } from '@angular/core';
import { AlertComponent } from 'projects/shared/alert';

@Component({
  selector: 'app-basic-alert-example',
  imports: [
    AlertComponent
  ],
  templateUrl: './basic-alert-example.component.html',
  styleUrl: './basic-alert-example.component.scss'
})
export class BasicAlertExampleComponent {
}
