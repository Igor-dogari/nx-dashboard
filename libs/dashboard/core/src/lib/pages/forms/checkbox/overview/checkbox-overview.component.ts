import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicCheckboxesExampleComponent
} from '../_examples/basic-checkboxes-example/basic-checkboxes-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
