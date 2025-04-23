import { Component, inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { CustomersStore } from '@shared';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent,
  DataViewActionBarComponent,
  DataViewActionBarDirective,
  DataViewCellRenderer,
  DataViewColumnDef,
  DataViewComponent,
  DataViewEmptyDataDirective,
  DataViewEmptyFilterResultsDirective,
  DataViewRowSelectionEvent,
  PanelBodyComponent,
  PanelComponent,
  PanelFooterComponent,
  PanelHeaderComponent,
  SegmentedButtonComponent,
  SegmentedComponent,
  VerticalDividerComponent,
} from '@core';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  title: string;
  author: User;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}

@Component({
  imports: [
    DataViewComponent,
    MatPaginator,
    FormsModule,
    MatButton,
    MatIcon,
    VerticalDividerComponent,
    MatIconButton,
    SegmentedButtonComponent,
    SegmentedComponent,
    DataViewActionBarComponent,
    DataViewActionBarDirective,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    BlockStateComponent,
    DataViewEmptyDataDirective,
    BlockStateContentComponent,
    DataViewEmptyFilterResultsDirective,
    BlockStateIconComponent,
    PanelHeaderComponent,
    PanelComponent,
    PanelFooterComponent,
    PanelBodyComponent,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  public customersStore = inject(CustomersStore);

  status = 'all';
  columnDefs: DataViewColumnDef[] = [
    {
      name: 'Id',
      dataField: 'id',
      visible: false,
    },
    {
      name: 'Title',
      dataField: 'title',
      visible: true,
    },
    {
      name: 'Author',
      dataField: 'author',
      dataRenderer: 'author',
      visible: true,
    },
    {
      name: 'Created At',
      dataField: 'createdAt',
      dataRenderer: 'date',
      visible: true,
    },
    {
      name: 'Published At',
      dataField: 'publishedAt',
      dataRenderer: 'date',
      visible: true,
    },
  ];
  selectedRows: Post[] = [];
  cellRenderers: DataViewCellRenderer[] = [
    {
      dataRenderer: 'author',
      component: () =>
        import(
          '../_renderers/dv-author-renderer/dv-author-renderer.component'
        ).then((c) => c.DvAuthorRendererComponent),
    },
    {
      dataRenderer: 'date',
      component: () =>
        import(
          '../_renderers/dv-date-renderer/dv-date-renderer.component'
        ).then((c) => c.DvDateRendererComponent),
    },
  ];
  search = '';

  ngOnInit() {
    // onSubmit() {
    //   this.#store.upsertCustomer(this.changeOdometer.value as CustomerInterface);
    // }
  }

  rowSelectionChanged(event: DataViewRowSelectionEvent<Post>): void {
    // console.log(event.checked);
  }

  selectionChanged(rows: Post[]): void {
    this.selectedRows = rows;
  }

  allRowsSelectionChanged(isAllSelected: boolean): void {
    // console.log(isAllSelected);
  }
}
