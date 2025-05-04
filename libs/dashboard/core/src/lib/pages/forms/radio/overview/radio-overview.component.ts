import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicRadioExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicRadioExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './radio-overview.component.html',
    styleUrl: './radio-overview.component.scss'
})
export class RadioOverviewComponent {

}
