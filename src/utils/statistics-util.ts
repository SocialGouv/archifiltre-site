import { compose, map, sum } from "lodash/fp";

import { statisticsConfig } from "../display-data/statistics";
import {
  AggregatedStatisticConfig,
  SimpleStatisticConfig,
  Statistic,
  StatisticConfig,
} from "../types/statistic-types";

const findElementByLabel = (statistics: Statistic[], label: string) => {
  return statistics.find((statistic) => statistic.label === label);
};

const getValue = (statistic: Statistic) => statistic?.value || 0;

const findValueByLabel = compose(getValue, findElementByLabel);

const extractAggregatedStatisticProps = (
  statistics: Statistic[],
  configItem: AggregatedStatisticConfig
) =>
  compose(
    sum,
    map((field) => findValueByLabel(statistics, field))
  )(configItem.fields);

const extractSimpleStatisticProps = (
  statistics: Statistic[],
  configItem: SimpleStatisticConfig
) => findValueByLabel(statistics, configItem.field);

const isAggregatedStatistic = (
  configItem: StatisticConfig
): configItem is AggregatedStatisticConfig => configItem.type === "aggregated";

const extractStatisticProps = (
  statistics: Statistic[],
  configItem: StatisticConfig
) =>
  isAggregatedStatistic(configItem)
    ? extractAggregatedStatisticProps(statistics, configItem)
    : extractSimpleStatisticProps(statistics, configItem);

const extractStatisticsProps = (
  statistics: Statistic[],
  config: StatisticConfig[]
) =>
  config.map((configItem) => ({
    label: configItem.label,
    value: extractStatisticProps(statistics, configItem),
  }));

export const sanitizeStatistics = (statistics: Statistic[]) =>
  extractStatisticsProps(statistics, statisticsConfig);
