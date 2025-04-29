import { FilterBuilderConditionInterface, FilterBuilderGroupInterface } from '@models';

export type FilterBuilderItemType =
  | FilterBuilderConditionInterface
  | FilterBuilderGroupInterface;
