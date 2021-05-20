import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React, { FC, ReactNode } from "react";

import { RawStatisticConfig } from "../../types/statistic-types";
import { spaceNumberForAnyValue } from "../../utils/number-util";

type StatisticRawProps = {
  statistic: RawStatisticConfig;
};

const useDataStyle = makeStyles({
  root: {
    color: "#000",
    fontSize: "30px",
    lineHeight: "47px",
  },
});

const useLabelStyle = makeStyles({
  root: {
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
          {statistic.tooltip && (
            <Tooltip title={statistic.tooltip}>
              <IconButton size="small" aria-label="info">
                <InfoOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  titleAccess="info"
                />
              </IconButton>
            </Tooltip>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatisticRaw;
