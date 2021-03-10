import { EventTracker, Palette } from "@devexpress/dx-react-chart";
import {
  Chart,
  Legend,
  PieSeries,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { FC, useCallback, useState } from "react";

import { PiechartStatisticsConfig } from "../../types/statistic-types";

type StatisticPiechartProps = {
  statistic: PiechartStatisticsConfig;
};

// Default MUI palette for dx-react-chart
const palette = [
  "#42A5F5",
  "#FF7043",
  "#9CCC65",
  "#FFCA28",
  "#26A69A",
  "#EC407A",
];

const StatisticPiechart: FC<StatisticPiechartProps> = ({ statistic }) => {
  const [targetItem, setTargetItem] = useState();
  const chartData = statistic.value.map(({ label, value }, index) => ({
    key: index,
    label,
    value,
  }));

  const onTargetItemChange = useCallback(
    (newTargetItem) => setTargetItem(newTargetItem),
    [setTargetItem]
  );

  return (
    <Chart data={chartData} height={140}>
      <Palette scheme={palette} />
      <PieSeries valueField="value" argumentField="label" />
      <EventTracker />
      <Tooltip
        targetItem={targetItem}
        onTargetItemChange={onTargetItemChange}
        contentComponent={() => (
          <List>
            {chartData.map(({ label, value }, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Legend.Marker color={palette[index]} />
                </ListItemIcon>
                <ListItemText>
                  {label} : {value}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        )}
      />
    </Chart>
  );
};

export default StatisticPiechart;
