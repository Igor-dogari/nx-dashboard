import { Component, input } from '@angular/core';
import { DataViewCellRendererComponentInterface } from '@core/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-cell',
  imports: [
    DatePipe
  ],
  templateUrl: './date-cell.renderer.html',
  styleUrl: './date-cell.renderer.scss'
})
export class DateCellRenderer implements DataViewCellRendererComponentInterface {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
