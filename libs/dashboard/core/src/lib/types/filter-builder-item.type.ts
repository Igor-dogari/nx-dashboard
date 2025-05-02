import { FilterBuilderConditionInterface, FilterBuilderGroupInterface } from '@core';

export type FilterBuilderItemType =
  | FilterBuilderConditionInterface
  | FilterBuilderGroupInterface;
