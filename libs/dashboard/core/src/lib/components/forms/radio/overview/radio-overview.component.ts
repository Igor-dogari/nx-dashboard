import { Component } from '@angular/core';
import { BasicRadioExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
