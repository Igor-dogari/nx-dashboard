import { Component } from '@angular/core';
import { BasicCheckboxesExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicCheckboxesExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './checkbox-overview.component.html',
    styleUrl: './checkbox-overview.component.scss'
})
export class CheckboxOverviewComponent {

}
