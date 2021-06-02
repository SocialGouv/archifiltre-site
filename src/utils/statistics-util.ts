// eslint-disable-next-line import/named
import { keyBy, mapValues, round, template } from "lodash";
// eslint-disable-next-line import/named
import { compose } from "lodash/fp";

import {
  AggregatedStatisticConfig,
  InterpolateStatisticConfig,
  isInterpolate,
  isRawStatistic,
  RenderingStatisticConfig,
  SimpleStatisticConfig,
  Statistic,
  StatisticConfig,
  StatisticsBlock,
  StatisticsGroup,
} from "../types/statistic-types";

const KILO_TO_TONS = 0.001;

const findElementByLabel = (statistics: Statistic[], label: string) => {
  return statistics.find((statistic) => statistic.label === label);
};

const getValue = (statistic: Statistic) => statistic?.value || 0;

const findValueByLabel = compose(getValue, findElementByLabel);

export const extractAggregatedStatisticProps = (
  statistics: Statistic[],
  configItem: AggregatedStatisticConfig
): number =>
  statistics
    .filter((statistic) => configItem.fields.includes(statistic.label))
    .reduce((total, currentStatistic) => total + currentStatistic.value, 0);

const extractSimpleStatisticProps = (
  statistics: Statistic[],
  configItem: SimpleStatisticConfig
) => findValueByLabel(statistics, configItem.field);

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

const formatInterpolateData = (data: Statistic[]): Record<string, number> =>
  mapValues(keyBy(data, "label"), ({ value }) => value);

const kiloToTons = (elementToRounded: string): number => {
  const roundedElement = +elementToRounded * KILO_TO_TONS;
  return round(+roundedElement, 1);
};

const formatInterpolateStatistic = (statistic: InterpolateStatisticConfig) => (
  data: Statistic[]
): RenderingStatisticConfig => {
  return {
    ...extractCommonProps(statistic),
    sublabel: template(statistic.sublabel || "")(formatInterpolateData(data)),
    type: "raw",
    value: kiloToTons(template(statistic.value)(formatInterpolateData(data))),
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

  if (isInterpolate(statistic)) {
    return formatInterpolateStatistic(statistic);
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
  date: group.date,
  title: group.title,
});

export const formatStatistics = (statisticsLayout: StatisticsGroup[]) => (
  data: Statistic[]
): StatisticsGroup<RenderingStatisticConfig>[] =>
  statisticsLayout.map((group) => formatGroup(group)(data));
