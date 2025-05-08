import { Component, inject, input } from '@angular/core';
import { TodosWidgetComponent } from '@core/components';

@Component({
  selector: 'app-todos-example',
  imports: [
    TodosWidgetComponent
  ],
  templateUrl: './todos-example.component.html',
  styleUrl: './todos-example.component.scss'
})
export class TodosExampleComponent {
}
