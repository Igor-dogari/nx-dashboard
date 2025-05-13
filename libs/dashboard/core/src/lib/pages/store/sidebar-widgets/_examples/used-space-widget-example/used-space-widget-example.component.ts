import { Component } from '@angular/core';
import { UsedSpaceComponent } from 'libs/dashboard/core/src/lib/@widgets/sidebar/used-space/used-space.component';

@Component({
    selector: 'app-used-space-widget-example',
    imports: [
        UsedSpaceComponent
    ],
    templateUrl: './used-space-widget-example.component.html',
    styleUrl: './used-space-widget-example.component.scss'
})
export class UsedSpaceWidgetExampleComponent {

}
