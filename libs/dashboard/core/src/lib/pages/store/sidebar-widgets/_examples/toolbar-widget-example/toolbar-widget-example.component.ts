import { Component } from '@angular/core';
import { ToolbarComponent } from 'libs/dashboard/core/src/lib/@widgets/sidebar/toolbar/toolbar.component';

@Component({
    selector: 'app-toolbar-widget-example',
    imports: [
        ToolbarComponent
    ],
    templateUrl: './toolbar-widget-example.component.html',
    styleUrl: './toolbar-widget-example.component.scss'
})
export class ToolbarWidgetExampleComponent {

}
