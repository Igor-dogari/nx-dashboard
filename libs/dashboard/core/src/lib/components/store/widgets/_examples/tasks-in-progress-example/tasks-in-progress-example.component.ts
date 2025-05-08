import { Component } from '@angular/core';
import { TasksInProgressWidgetComponent } from '@core/components';

@Component({
    selector: 'app-tasks-in-progress-example',
    imports: [
        TasksInProgressWidgetComponent
    ],
    templateUrl: './tasks-in-progress-example.component.html',
    styleUrl: './tasks-in-progress-example.component.scss'
})
export class TasksInProgressExampleComponent {

}
