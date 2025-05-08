import { Component } from '@angular/core';
import { BasicPanelExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';
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
    templateUrl: './panel-overview.component.html',
    styleUrl: './panel-overview.component.scss'
})
export class PanelOverviewComponent {

}
