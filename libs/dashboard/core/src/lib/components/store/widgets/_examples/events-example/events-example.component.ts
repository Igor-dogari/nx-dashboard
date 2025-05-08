import { Component } from '@angular/core';
import { EventsWidgetComponent } from '@core/components';

@Component({
    selector: 'app-events-example',
    imports: [
        EventsWidgetComponent
    ],
    templateUrl: './events-example.component.html',
    styleUrl: './events-example.component.scss'
})
export class EventsExampleComponent {

}
