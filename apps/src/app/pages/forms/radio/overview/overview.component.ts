import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicRadioExampleComponent } from '../_examples/basic-radio-example/basic-radio-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicRadioExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
