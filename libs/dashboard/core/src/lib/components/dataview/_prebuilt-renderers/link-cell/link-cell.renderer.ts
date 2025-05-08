import { Component, input } from '@angular/core';
import { DataViewCellRendererComponentInterface } from '@core/models';
import { ContentFadeComponent } from '@core/components';

@Component({
  selector: 'app-link-cell',
  imports: [
    ContentFadeComponent
  ],
  templateUrl: './link-cell.renderer.html',
  styleUrl: './link-cell.renderer.scss'
})
export class LinkCellRenderer implements DataViewCellRendererComponentInterface {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
