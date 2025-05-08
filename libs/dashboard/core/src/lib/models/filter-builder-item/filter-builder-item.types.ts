import { FilterBuilderConditionInterface, FilterBuilderGroupInterface } from '@core/models';

export type FilterBuilderItemType =
  | FilterBuilderConditionInterface
  | FilterBuilderGroupInterface;
