import { Component, input } from '@angular/core';
import {
  DataViewCellRendererComponentInterface,
  } from '@core/models';
import { DicebearComponent } from '@core/components';
import { DataViewColumnDef } from '@core/models';

@Component({
  selector: 'app-user-cell',
  imports: [DicebearComponent],
  templateUrl: './user-cell-renderer.component.html',
  styleUrl: './user-cell-renderer.component.scss',
})
export class UserCellRendererComponent implements DataViewCellRendererComponentInterface {
  element = input<any>();
  columnDef = input<DataViewColumnDef>();
  fieldData = input();
}
