import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { FC, ReactNode } from "react";

import { RawStatisticConfig } from "../../types/statistic-types";
import { spaceNumberForAnyValue } from "../../utils/number-util";
import StatisticTooltip from "./statistic-tooltip";

type StatisticRawProps = {
  statistic: RawStatisticConfig;
};

const THEME_LIGHT = "light";

const useDataStyle = makeStyles(({ palette: { type } }) => ({
  root: {
    color: type === THEME_LIGHT ? "#000" : "#fff",
    fontSize: "30px",
    lineHeight: "20px",
    margin: "25px 0",
  },
}));

const useLabelStyle = makeStyles({
  root: {
    "& .label-inner": {
      display: "table",
    },
    fontSize: "15px",
    lineHeight: "22px",
    marginTop: "8px",
  },
});

const spaceNumber = spaceNumberForAnyValue<ReactNode>({
  minDigits: 5,
});

const StatisticRaw: FC<StatisticRawProps> = ({ statistic }) => {
  return (
    <Box width={1} paddingTop={3}>
      <Typography classes={useDataStyle()} color="textPrimary">
        {spaceNumber(statistic.value)}{" "}
        {statistic.unit && (
          <Typography component="span">{statistic.unit}</Typography>
        )}
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Typography classes={useLabelStyle()} color="textSecondary">
          {statistic.label}{" "}
          {statistic.sublabel && (
            <Typography className="label-inner">
              {statistic.sublabel}
            </Typography>
          )}
          {statistic.tooltip && (
            <StatisticTooltip tooltip={statistic.tooltip} />
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatisticRaw;
