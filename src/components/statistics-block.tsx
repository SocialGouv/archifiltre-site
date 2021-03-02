import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";

import { StatisticsBlock as StatisticsBlockType } from "../types/statistic-types";
import { STATISTICS_TEXT_COLOR } from "../utils/colors";
import Statistic from "./statistic";

type StatisticsBlockProps = {
  block: StatisticsBlockType;
};

const useCardStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const useCardContentStyles = makeStyles({
  root: {
    paddingBottom: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "12px",
  },
});

const useTitleStyle = makeStyles({
  root: {
    color: STATISTICS_TEXT_COLOR,
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "22px",
    textTransform: "uppercase",
  },
});

const StatisticsBlock: FC<StatisticsBlockProps> = ({ block }) => (
  <Card classes={useCardStyles()}>
    <CardContent classes={useCardContentStyles()}>
      <Typography classes={useTitleStyle()} align="center">
        {block.title}
      </Typography>
      <Box display="flex" justifyContent="space-around">
        {block.statistics.map((statistic, index) => (
          <Box key={index} width={1} paddingTop={3}>
            <Statistic statistic={statistic} />
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default StatisticsBlock;
