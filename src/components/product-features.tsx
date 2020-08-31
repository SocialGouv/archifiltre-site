import { Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

import { featureData } from "../display-data/feature-data";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    margin: -theme.spacing(2),
    padding: theme.spacing(8, 2, 6),
  },
}));

const ProductFeatures: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box pb={6} display="flex" justifyContent="center">
        <Typography variant="h5" component="h2" color="textPrimary">
          Pourquoi c&rsquo;est si simple ?
        </Typography>
      </Box>
      <Grid container alignItems="center" spacing={2}>
        {featureData.map((feature) => (
          <Grid item md={3} key={feature.title}>
            <Box p={3}>
              <Box>
                <Typography variant="h5" color="textPrimary">
                  {feature.icon} {feature.title}
                </Typography>
              </Box>
              <Box>{feature.description}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductFeatures;
