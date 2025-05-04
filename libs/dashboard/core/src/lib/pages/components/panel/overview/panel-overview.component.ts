import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPanelExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
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
