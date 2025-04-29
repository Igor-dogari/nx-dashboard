import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicCommandBarExampleComponent
} from '../_examples/basic-command-bar-example/basic-command-bar-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
