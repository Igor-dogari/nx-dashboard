import { FilterBuilderConditionInterface, FilterBuilderGroupInterface } from '@shared';

export type FilterBuilderItemType =
  | FilterBuilderConditionInterface
  | FilterBuilderGroupInterface;
