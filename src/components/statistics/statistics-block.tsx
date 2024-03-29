import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";

import {
  RenderingStatisticConfig,
  StatisticsBlock as StatisticsBlockType,
} from "../../types/statistic-types";
import Statistic from "./statistic";

type StatisticsBlockProps = {
  block: StatisticsBlockType<RenderingStatisticConfig>;
};

const useCardStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const useCardContentStyles = makeStyles({
  root: {
    "& .card-title": {
      fontSize: "14px",
      fontWeight: "600",
      margin: "0 10px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    paddingBottom: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "12px",
  },
});

const StatisticsBlock: FC<StatisticsBlockProps> = ({ block }) => (
  <Card classes={useCardStyles()}>
    <CardContent classes={useCardContentStyles()}>
      <Box display="flex" justifyContent="space-around">
        {block.statistics.map((statistic, index) => (
          <Box key={index} width={1} position="relative">
            <Typography className="card-title">{block.title}</Typography>
            <Statistic statistic={statistic} />
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default StatisticsBlock;
