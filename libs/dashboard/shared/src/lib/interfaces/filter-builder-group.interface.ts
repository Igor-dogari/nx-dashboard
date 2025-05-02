import { FilterBuilderItemType } from '@shared';

export interface FilterBuilderGroupInterface {
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}
