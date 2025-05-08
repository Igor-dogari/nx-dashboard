import { Component } from '@angular/core';
import { BasicToolbarExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

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
