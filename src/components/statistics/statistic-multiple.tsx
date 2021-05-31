import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React, { FC, ReactNode } from "react";

import { RenderMultipleStatisticConfig } from "../../types/statistic-types";
import { spaceNumberForAnyValue } from "../../utils/number-util";
import StatisticTooltip from "./statistic-tooltip";

type StatisticMultipleProps = {
  statistic: RenderMultipleStatisticConfig;
};

const THEME_LIGHT = "light";

const useDataStyle = makeStyles(({ palette: { type } }) => ({
  root: {
    color: type === THEME_LIGHT ? "#000" : "#fff",
    fontSize: "30px",
    lineHeight: "47px",
  },
}));

const useLabelStyle = makeStyles({
  root: {
    "& .label-inner": {
      display: "table",
    },
    fontSize: "15px",
    lineHeight: "22px",
    marginTop: "9px",
  },
});

const spaceNumber = spaceNumberForAnyValue<ReactNode>({
  minDigits: 5,
});

const StatisticsMultiple: FC<StatisticMultipleProps> = ({ statistic }) => {
  return (
    <Box width={1} paddingTop={3}>
      <Typography classes={useDataStyle()} color="textPrimary">
        {spaceNumber(statistic.value.firstValue)}{" "}
        {statistic.unit && (
          <Typography component="span">{statistic.unit}</Typography>
        )}
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Typography classes={useLabelStyle()} color="textSecondary">
          <Typography className="label-inner">{statistic.label}</Typography>
          <Typography className="label-inner">
            {statistic.sublabel} {statistic.value.secondValue}{" "}
          </Typography>
          {statistic.tooltip && (
            <StatisticTooltip tooltip={statistic.tooltip} />
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatisticsMultiple;
