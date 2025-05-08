import { FilterBuilderItemType } from '@core/models';

export interface FilterBuilderGroupInterface {
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}
