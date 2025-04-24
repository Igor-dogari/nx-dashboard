import { FilterBuilderItemType } from '@models';

export interface FilterBuilderGroupInterface {
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}
