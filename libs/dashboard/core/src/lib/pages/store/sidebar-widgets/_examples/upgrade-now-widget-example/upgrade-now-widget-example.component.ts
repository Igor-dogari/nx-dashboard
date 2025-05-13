import { Component } from '@angular/core';
import { UpgradeNowComponent } from 'libs/dashboard/core/src/lib/@widgets/sidebar/upgrade-now/upgrade-now.component';

@Component({
    selector: 'app-upgrade-now-widget-example',
    imports: [
        UpgradeNowComponent
    ],
    templateUrl: './upgrade-now-widget-example.component.html',
    styleUrl: './upgrade-now-widget-example.component.scss'
})
export class UpgradeNowWidgetExampleComponent {

}
