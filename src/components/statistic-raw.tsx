import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { FC, ReactNode } from "react";

import { RawStatisticConfig } from "../types/statistic-types";
import { STATISTICS_TEXT_COLOR } from "../utils/colors";
import { spaceNumberForAnyValue } from "../utils/number-util";

type StatisticRawProps = {
  statistic: RawStatisticConfig;
};

const useDataStyle = makeStyles({
  root: {
    color: STATISTICS_TEXT_COLOR,
    fontSize: "35px",
    lineHeight: "47px",
  },
});

const useLabelStyle = makeStyles({
  root: {
    color: STATISTICS_TEXT_COLOR,
    fontSize: "15px",
    lineHeight: "22px",
    marginTop: "8px",
  },
});

const spaceNumber = spaceNumberForAnyValue<ReactNode>({
  minDigits: 5,
});

const StatisticRaw: FC<StatisticRawProps> = ({ statistic }) => (
  <Box width={1}>
    <Typography classes={useDataStyle()}>
      {spaceNumber(statistic.value)}
    </Typography>
    <Typography classes={useLabelStyle()}>{statistic.label}</Typography>
  </Box>
);

export default StatisticRaw;
