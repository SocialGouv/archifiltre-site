export type Statistic = {
  label: string;
  value: number;
};

export type AggregatedStatisticConfig = {
  label: string;
  fields: string[];
  type: "aggregated";
};

export type SimpleStatisticConfig = {
  label: string;
  field: string;
  type: "simple";
};

export type StatisticConfig = SimpleStatisticConfig | AggregatedStatisticConfig;
