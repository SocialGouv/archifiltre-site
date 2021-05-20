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

const getTitleStyle = makeStyles({
  root: {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "25px",
  },
});

const getSubtitleStyle = makeStyles({
  root: {
    fontSize: "12.5px",
    fontWeight: "bold",
    lineHeight: "22px",
    paddingLeft: "1.5rem",
  },
});

const getItemStyle = makeStyles({
  root: {
    width: "100%",
  },
});

const StatisticsGroup: FC<StatisticsGroupProps> = ({ group }) => (
  <Box display="flex" width="1" flexDirection="column">
    {console.log(group)}
    <Box paddingBottom={2}>
      <Typography
        // color={group.type === "primary" ? "inherit" : "textSecondary"}
        classes={
          group.type === "primary" ? getTitleStyle() : getSubtitleStyle()
        }
        variant="h5"
        component="h2"
      >
        {group.title}
      </Typography>
    </Box>
    <Box>
      <Grid container spacing={3}>
        {group.blocks.map((block, index) => (
          <Grid item key={index} sm={block.size} classes={getItemStyle()}>
            <StatisticsBlock block={block} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default StatisticsGroup;
