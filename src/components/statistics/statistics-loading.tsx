import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { FC } from "react";

const StatisticsLoading: FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
  >
    <CircularProgress />
    <div>Chargement en cours...</div>
  </Box>
);

export default StatisticsLoading;
