import { Component, input } from '@angular/core';
import { DataViewCellRendererComponentInterface } from '@core/models';
import { IconComponent } from '@core/components';

@Component({
  selector: 'app-enabled-cell',
  imports: [
    IconComponent
  ],
  templateUrl: './enabled-cell.renderer.html',
  styleUrl: './enabled-cell.renderer.scss'
})
export class EnabledCellRenderer implements DataViewCellRendererComponentInterface {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
