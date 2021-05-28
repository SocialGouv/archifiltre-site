import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React, { FC } from "react";

type StatisticTooltipProps = {
  tooltip: string;
};

const StatisticTooltip: FC<StatisticTooltipProps> = ({ tooltip }) => (
  <Tooltip title={tooltip}>
    <IconButton size="small" aria-label="info">
      <InfoOutlinedIcon fontSize="small" color="secondary" titleAccess="info" />
    </IconButton>
  </Tooltip>
);
export default StatisticTooltip;
