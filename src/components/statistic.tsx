import React, { FC } from "react";

import { isRawStatistic, StatisticConfig } from "../types/statistic-types";
import StatisticRaw from "./statistic-raw";

type StatisticProps = {
  statistic: StatisticConfig;
};

const Statistic: FC<StatisticProps> = ({ statistic }) =>
  isRawStatistic(statistic) ? <StatisticRaw statistic={statistic} /> : null;

export default Statistic;
