import { FilterBuilderFieldDataSourceItemInterface } from '@core';

export interface FilterBuilderFieldDefInterface {
  name: string;
  dataType: string;
  dataField: string;
  format?: string;
  filterOperations?: string[];
  lookup?: {
    dataSource: FilterBuilderFieldDataSourceItemInterface[];
  };
}
