import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicPanelExampleComponent } from '../_examples/basic-panel-example/basic-panel-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicPanelExampleComponent,
    PageComponent,
    PageContentDirective,
    MatDivider
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
