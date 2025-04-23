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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
