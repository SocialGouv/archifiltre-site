import Box from "@material-ui/core/Box";
import React, { FC, ReactNode } from "react";

import StatisticsSwitcherContent from "./statistic-switcher-content";

type StatisticsSwitcherProps = {
  initialContent: ReactNode;
  alternativeContent?: ReactNode;
};

const StatisticsSwitcher: FC<StatisticsSwitcherProps> = ({
  initialContent,
  alternativeContent,
}) =>
  alternativeContent ? (
    <StatisticsSwitcherContent
      initialContent={initialContent}
      alternativeContent={alternativeContent}
    />
  ) : (
    <Box>{initialContent}</Box>
  );

export default StatisticsSwitcher;
