import { Component, Input } from '@angular/core';
import { AvatarComponent, InitialsPipe } from '@core';

@Component({
  selector: 'app-dv-author-renderer',
  imports: [InitialsPipe, AvatarComponent],
  templateUrl: './dv-author-renderer.component.html',
  styleUrl: './dv-author-renderer.component.scss',
})
export class DvAuthorRendererComponent {
  @Input()
  element: any;

  @Input()
  columnDef: any;

  @Input()
  fieldData: any;
}
