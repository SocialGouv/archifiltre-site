import React, { FC } from "react";

import {
  isMapChart,
  isPiechart,
  isRawStatistic,
  StatisticConfig,
} from "../types/statistic-types";
import StatisticMapChart from "./statistic-mapchart";
import StatisticPiechart from "./statistic-piecharts";
import StatisticRaw from "./statistic-raw";

type StatisticProps = {
  statistic: StatisticConfig;
};

const Statistic: FC<StatisticProps> = ({ statistic }) => {
  if (isPiechart(statistic)) {
    return <StatisticPiechart statistic={statistic} />;
  }
  if (isMapChart(statistic)) {
    return <StatisticMapChart />;
  }
  if (isRawStatistic(statistic)) {
    return <StatisticRaw statistic={statistic} />;
  }

  return null;
};

export default Statistic;
