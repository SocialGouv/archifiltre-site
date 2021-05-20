import { EventTracker } from "@devexpress/dx-react-chart";
import {
  ArgumentAxis,
  Chart,
  LineSeries,
  Tooltip,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import Box from "@material-ui/core/Box";
import { format, parseISO } from "date-fns/fp";
// eslint-disable-next-line import/named
import { compose } from "lodash/fp";
import React, { FC, useMemo } from "react";

import { ConnectedDotsStatisticsConfig } from "../../types/statistic-types";

type StatisticsConnectedDotsProps = {
  statistic: ConnectedDotsStatisticsConfig;
};

const formatXAxisLabel = compose(format("d MMM yy"), parseISO);

const StatisticsConnectedDots: FC<StatisticsConnectedDotsProps> = ({
  statistic,
}) => {
  const statisticValueMap = Object.keys(statistic.value).sort();
  statisticValueMap.pop();

  const data = useMemo(
    () =>
      statisticValueMap.map((key) => ({
        label: formatXAxisLabel(key),
        value: statistic.value[key],
      })),
    [statistic.value, statisticValueMap]
  );

  const renderedLabels = useMemo(
    () => [
      data[0].label,
      data[Math.floor(data.length / 2)].label,
      data[data.length - 1].label,
    ],
    [data]
  );

  const ArgumentLabelComponent = useMemo(() => {
    const ArgumentLabel = (props: ArgumentAxis.LabelProps) =>
      renderedLabels.includes(props.text.toString()) ? (
        <ArgumentAxis.Label {...props} />
      ) : null;

    return ArgumentLabel;
  }, [renderedLabels]);

  return (
    <Box>
      <Chart data={data} height={100}>
        <EventTracker />
        <ArgumentAxis
          tickSize={10}
          labelComponent={ArgumentLabelComponent}
          showTicks={false}
        />
        <ValueAxis showLabels={false} />
        <LineSeries argumentField="label" valueField="value" />
        <Tooltip />
      </Chart>
    </Box>
  );
};

export default StatisticsConnectedDots;
