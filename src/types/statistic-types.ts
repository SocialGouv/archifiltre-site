import { GridSize } from "@material-ui/core";
import { ReactNode } from "react";

export type Statistic = {
  label: string;
  value: number;
};

export enum Formatting {
  NONE,
  PIECHARTS,
  CONNECTED_DOTS,
  MAPCHART,
}

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
  formatting?: Formatting;
};

export type StatisticConfig = (
  | SimpleStatisticConfig
  | AggregatedStatisticConfig
  | RawStatisticConfig
) & {
  switchDisplayConfig?: StatisticConfig;
};

export type PiechartStatisticsConfig = RawStatisticConfig & {
  formatting: Formatting.PIECHARTS;
  value: ChartData[];
};

export type MapChartStatisticConfig = RawStatisticConfig & {
  value: Record<string, number>;
  formatting: Formatting.MAPCHART;
};

export type ConnectedDotsStatisticsConfig = RawStatisticConfig & {
  formatting: Formatting.CONNECTED_DOTS;
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
): stat is PiechartStatisticsConfig => stat.formatting === Formatting.PIECHARTS;

export const isConnectedDots = (
  stat: RenderingStatisticConfig
): stat is ConnectedDotsStatisticsConfig =>
  stat.formatting === Formatting.CONNECTED_DOTS;

export const isMapChart = (
  stat: StatisticConfig
): stat is MapChartStatisticConfig => stat.formatting === Formatting.MAPCHART;

export type StatisticsBlock<StatType = StatisticConfig> = {
  title: string;
  size: GridSize;
  statistics: StatType[];
};

export type StatisticsGroup<StatType = StatisticConfig> = {
  title: string;
  blocks: StatisticsBlock<StatType>[];
};
