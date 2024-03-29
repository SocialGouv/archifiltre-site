import React, { FC } from "react";

import {
  isConnectedDots,
  isInterpolate,
  isMapChart,
  isPiechart,
  RenderingStatisticConfig,
} from "../../types/statistic-types";
import StatisticsConnectedDots from "./statistic-connected-dots";
import StatisticMapChart from "./statistic-mapchart";
import StatisticsMultiple from "./statistic-multiple";
import StatisticPiechart from "./statistic-piecharts";
import StatisticRaw from "./statistic-raw";
import StatisticsSwitcher from "./statistic-switcher";

type StatisticProps = {
  statistic: RenderingStatisticConfig;
};

const getContent = (statistic: RenderingStatisticConfig) => {
  if (isPiechart(statistic)) {
    return <StatisticPiechart statistic={statistic} />;
  }
  if (isMapChart(statistic)) {
    return <StatisticMapChart statistic={statistic} />;
  }
  if (isConnectedDots(statistic)) {
    return <StatisticsConnectedDots statistic={statistic} />;
  }

  if (isInterpolate(statistic)) {
    return <StatisticsMultiple statistic={statistic} />;
  }

  return <StatisticRaw statistic={statistic} />;
};

const Statistic: FC<StatisticProps> = ({ statistic }) => {
  const StatContent = getContent(statistic);

  const alternativeContent = statistic.switchDisplayConfig ? (
    <Statistic statistic={statistic.switchDisplayConfig} />
  ) : null;

  return (
    <StatisticsSwitcher
      initialContent={StatContent}
      alternativeContent={alternativeContent}
    >
      {StatContent}
    </StatisticsSwitcher>
  );
};

export default Statistic;
