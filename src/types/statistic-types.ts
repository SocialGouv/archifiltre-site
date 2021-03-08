import { GridSize } from "@material-ui/core";
import { ReactNode } from "react";

export type Statistic = {
  label: string;
  value: number;
};

export type Formatting = "none" | "piechart" | "mapchart";

export type ChartData = { label: string; value: number };

type BaseStatisticConfig = {
  label: string;
  tooltip?: string;
  formatting?: Formatting;
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
  formatting?: "none";
};

export type PiechartStatisticConfig = BaseStatisticConfig & {
  value: ChartData[];
  type: "raw";
  formatting: "piechart";
};

export type MapChartStatisticConfig = BaseStatisticConfig & {
  value: ReactNode;
  type: "raw";
  formatting: "mapchart";
};

export type StatisticConfig =
  | SimpleStatisticConfig
  | AggregatedStatisticConfig
  | RawStatisticConfig
  | PiechartStatisticConfig
  | MapChartStatisticConfig;

export const isRawStatistic = (
  stat: StatisticConfig
): stat is RawStatisticConfig => stat.type === "raw";

export const isPiechart = (
  stat: StatisticConfig
): stat is PiechartStatisticConfig => stat.formatting === "piechart";

export const isMapChart = (
  stat: StatisticConfig
): stat is MapChartStatisticConfig => stat.formatting === "mapchart";

export type StatisticsBlock = {
  title: string;
  size: GridSize;
  statistics: StatisticConfig[];
};

export type StatisticsGroup = {
  title: string;
  blocks: StatisticsBlock[];
};
