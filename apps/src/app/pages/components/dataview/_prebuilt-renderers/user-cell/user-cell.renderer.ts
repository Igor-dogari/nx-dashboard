import { Component, input } from '@angular/core';
import {
  DataViewCellRendererComponent,
  DataViewColumnDef,
  DicebearComponent,
} from '@core';

@Component({
  selector: 'app-user-cell',
  imports: [DicebearComponent],
  templateUrl: './user-cell.renderer.html',
  styleUrl: './user-cell.renderer.scss',
})
export class UserCellRenderer implements DataViewCellRendererComponent {
  element = input<any>();
  columnDef = input<DataViewColumnDef>();
  fieldData = input();
}
