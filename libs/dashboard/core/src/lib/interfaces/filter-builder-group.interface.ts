import { FilterBuilderItemType } from '@core';

export interface FilterBuilderGroupInterface {
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}
