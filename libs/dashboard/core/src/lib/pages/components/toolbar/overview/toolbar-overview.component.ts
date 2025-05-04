import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicToolbarExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicToolbarExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './toolbar-overview.component.html',
  styleUrl: './toolbar-overview.component.scss'
})
export class ToolbarOverviewComponent {

}
