import { GridSize } from "@material-ui/core";
import { ReactNode } from "react";

export type Statistic = {
  label: string;
  value: number;
};

type BaseStatisticConfig = {
  label: string;
  tooltip?: string;
};

export type AggregatedStatisticConfig = BaseStatisticConfig & {
  fields: string[];
  type: "aggregated";
};

export type SimpleStatisticConfig = BaseStatisticConfig & {
  field: string;
  type: "simple";
};

export type RawStatisticConfig = BaseStatisticConfig & {
  value: ReactNode;
  type: "raw";
};

export type StatisticConfig =
  | SimpleStatisticConfig
  | AggregatedStatisticConfig
  | RawStatisticConfig;

export const isRawStatistic = (
  stat: StatisticConfig
): stat is RawStatisticConfig => stat.type === "raw";

export type StatisticsBlock = {
  title: string;
  size: GridSize;
  statistics: StatisticConfig[];
};

export type StatisticsGroup = {
  title: string;
  blocks: StatisticsBlock[];
};
