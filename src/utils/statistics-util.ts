// eslint-disable-next-line import/named
import { compose, map, sum } from "lodash/fp";

import {
  AggregatedStatisticConfig,
  isMultiple,
  isRawStatistic,
  MultipleStatisticConfig,
  RenderingStatisticConfig,
  SimpleStatisticConfig,
  Statistic,
  StatisticConfig,
  StatisticsBlock,
  StatisticsGroup,
} from "../types/statistic-types";

const findElementByLabel = (statistics: Statistic[], label: string) => {
  return statistics.find((statistic) => statistic.label === label);
};

const getValue = (statistic: Statistic) => statistic?.value || 0;

const findValueByLabel = compose(getValue, findElementByLabel);

export const extractAggregatedStatisticProps = (
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

const extractMultipleStatisticProps = (
  statistics: Statistic[],
  configItem: MultipleStatisticConfig
) => {
  const [firstValue, secondValue] = map((field) =>
    findValueByLabel(statistics, field)
  )(configItem.fields);
  return { firstValue, secondValue };
};

const isAggregatedStatistic = (
  configItem: StatisticConfig
): configItem is AggregatedStatisticConfig => configItem.type === "aggregated";

const extractCommonProps = ({
  label,
  formatting,
  tooltip,
  unit,
}: StatisticConfig) => ({
  formatting,
  label,
  tooltip,
  unit,
});

const formatAggregatedStatistic = (statistic: AggregatedStatisticConfig) => (
  data: Statistic[]
): RenderingStatisticConfig => ({
  ...extractCommonProps(statistic),
  type: "raw",
  value: extractAggregatedStatisticProps(data, statistic),
});

const formatMultipleStatistic = (statistic: MultipleStatisticConfig) => (
  data: Statistic[]
): RenderingStatisticConfig => {
  return {
    ...extractCommonProps(statistic),
    sublabel: statistic.sublabel,
    type: "multiple",
    value: extractMultipleStatisticProps(data, statistic),
  };
};
const formatSimpleStatistic = (statistic: SimpleStatisticConfig) => (
  data: Statistic[]
): RenderingStatisticConfig => ({
  ...extractCommonProps(statistic),
  type: "raw",
  value: extractSimpleStatisticProps(data, statistic),
});

const baseFormatStatistic = (statistic: StatisticConfig) => {
  if (isAggregatedStatistic(statistic)) {
    return formatAggregatedStatistic(statistic);
  }

  if (isMultiple(statistic)) {
    return formatMultipleStatistic(statistic);
  }
  if (isRawStatistic(statistic)) {
    return () => statistic;
  }

  return formatSimpleStatistic(statistic);
};

const formatStatistic = (statistic: StatisticConfig) => (
  data: Statistic[]
): RenderingStatisticConfig => {
  return {
    ...baseFormatStatistic(statistic)(data),
    switchDisplayConfig: statistic.switchDisplayConfig
      ? formatStatistic(statistic.switchDisplayConfig)(data)
      : undefined,
  };
};

const formatBlock = (block: StatisticsBlock) => (
  data: Statistic[]
): StatisticsBlock<RenderingStatisticConfig> => ({
  size: block.size,
  statistics: block.statistics.map((stat) => formatStatistic(stat)(data)),
  title: block.title,
});

const formatGroup = (group: StatisticsGroup) => (
  data: Statistic[]
): StatisticsGroup<RenderingStatisticConfig> => ({
  blocks: group.blocks.map((block) => formatBlock(block)(data)),
  title: group.title,
});

export const formatStatistics = (statisticsLayout: StatisticsGroup[]) => (
  data: Statistic[]
): StatisticsGroup<RenderingStatisticConfig>[] =>
  statisticsLayout.map((group) => formatGroup(group)(data));
