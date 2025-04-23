import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicToolbarExampleComponent } from '../_examples/basic-toolbar-example/basic-toolbar-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicToolbarExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
