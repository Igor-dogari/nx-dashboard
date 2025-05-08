import { Component } from '@angular/core';
import { BasicCommandBarExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicCommandBarExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './command-bar-overview.component.html',
  styleUrl: './command-bar-overview.component.scss'
})
export class CommandBarOverviewComponent {

}
