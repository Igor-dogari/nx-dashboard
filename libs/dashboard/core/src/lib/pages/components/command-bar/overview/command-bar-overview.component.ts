import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicCommandBarExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
