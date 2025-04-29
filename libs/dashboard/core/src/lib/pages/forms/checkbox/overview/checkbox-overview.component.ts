import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicCheckboxesExampleComponent
} from '../_examples/basic-checkboxes-example/basic-checkboxes-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
