import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";

import type {
  RenderingStatisticConfig,
  StatisticsGroup as StatisticsGroupType,
} from "../../types/statistic-types";
import StatisticsBlock from "./statistics-block";

type StatisticsGroupProps = {
  group: StatisticsGroupType<RenderingStatisticConfig>;
};

const useTitleStyle = makeStyles({
  root: {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "25px",
  },
});

const useItemStyle = makeStyles({
  root: {
    width: "100%",
  },
});

const StatisticsGroup: FC<StatisticsGroupProps> = ({ group }) => (
  <Box display="flex" width="1" flexDirection="column">
    <Box paddingBottom={2}>
      <Typography classes={useTitleStyle()} variant="h5" component="h2">
        {group.title}
      </Typography>
    </Box>
    <Box>
      <Grid container spacing={3}>
        {group.blocks.map((block, index) => (
          <Grid item key={index} sm={block.size} classes={useItemStyle()}>
            <StatisticsBlock block={block} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default StatisticsGroup;
