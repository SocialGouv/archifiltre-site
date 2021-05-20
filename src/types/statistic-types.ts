import { GridSize } from "@material-ui/core";
import { ReactNode } from "react";

export type Statistic = {
  label: string;
  value: number;
};

export type Formatting = "none" | "piecharts" | "connected_dots" | "mapchart";

export type ChartData = { label: string; value: number };

type BaseStatisticConfig = {
  label: string;
  tooltip?: string;
  formatting?: Formatting;
};

export type AggregatedStatisticConfig = BaseStatisticConfig & {
  fields: string[];
  type: "aggregated";
  unit?: string;
};

export type SimpleStatisticConfig = BaseStatisticConfig & {
  field: string;
  type: "simple";
  unit?: string;
};

export type RawStatisticConfig = BaseStatisticConfig & {
  value: ReactNode;
  type: "raw";
  formatting?: Formatting;
  unit?: string;
};

export type StatisticConfig = (
  | SimpleStatisticConfig
  | AggregatedStatisticConfig
  | RawStatisticConfig
) & {
  switchDisplayConfig?: StatisticConfig;
};

export type PiechartStatisticsConfig = RawStatisticConfig & {
  formatting: "piecharts";
  value: ChartData[];
};

export type MapChartStatisticConfig = RawStatisticConfig & {
  value: Record<string, number>;
  formatting: "mapchart";
};

export type ConnectedDotsStatisticsConfig = RawStatisticConfig & {
  formatting: "connected_dots";
  value: Record<string, number>;
};

export type RenderingStatisticConfig = (
  | RawStatisticConfig
  | PiechartStatisticsConfig
  | ConnectedDotsStatisticsConfig
  | MapChartStatisticConfig
) & {
  switchDisplayConfig?: RenderingStatisticConfig;
};

export const isRawStatistic = (
  stat: StatisticConfig
): stat is RawStatisticConfig => stat.type === "raw";

export const isPiechart = (
  stat: RenderingStatisticConfig
): stat is PiechartStatisticsConfig => stat.formatting === "piecharts";

export const isConnectedDots = (
  stat: RenderingStatisticConfig
): stat is ConnectedDotsStatisticsConfig =>
  stat.formatting === "connected_dots";

export const isMapChart = (
  stat: StatisticConfig
): stat is MapChartStatisticConfig => stat.formatting === "mapchart";

export type StatisticsBlock<StatType = StatisticConfig> = {
  title: string;
  size: GridSize;
  statistics: StatType[];
};

export type StatisticsGroup<StatType = StatisticConfig> = {
  title: string;
  blocks: StatisticsBlock<StatType>[];
};
