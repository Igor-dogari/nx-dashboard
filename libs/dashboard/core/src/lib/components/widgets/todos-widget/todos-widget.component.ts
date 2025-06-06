import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { DashboardInterface, WidgetInterface, WidgetComponentInterface } from '@core/models';
import { DASHBOARD } from '@core/consts';

export interface TodoTask {
  name: string;
  position: number;
  assignee: {
    name: string
  };
  priority: {
    id: string,
    name: string
  };
}

const DATA: TodoTask[] = [
  { position: 1, name: 'Hydrogen', assignee: { name: 'Me' }, priority: { id: 'high', name: 'High' } },
  { position: 2, name: 'Helium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 3, name: 'Lithium', assignee: { name: 'Me' }, priority: { id: 'low', name: 'Low' } },
  { position: 4, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 5, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 6, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'low', name: 'Low' } }
];

@Component({
  selector: 'emr-todos-widget',
  imports: [
    MatButton,
    MatIcon,
    MatCell,
    MatCheckbox,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatTable,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './todos-widget.component.html',
  styleUrl: './todos-widget.component.scss'
})
export class TodosWidgetComponent implements WidgetComponentInterface {
  private _dashboard = inject<DashboardInterface>(DASHBOARD, { optional: true });

  widget = input<WidgetInterface>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }

  displayedColumns: string[] = ['drag', 'select', 'position', 'name', 'assignee', 'priority'];
  dataSource = new MatTableDataSource<TodoTask>(DATA);
  selection = new SelectionModel<TodoTask>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TodoTask): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  drop(event: CdkDragDrop<TodoTask[]>) {
    const data = this.dataSource.data;
    moveItemInArray(data, event.previousIndex, event.currentIndex);
    this.dataSource.data = data;
  }
}
