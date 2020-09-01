import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

import { homepageTweets } from "../display-data/tweets-data";

const useStyles = makeStyles((theme: Theme) => ({
  actions: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    minHeight: 200,
    minWidth: 250,
  },
  title: {
    fontSize: 14,
    paddingBottom: theme.spacing(3),
  },
}));

const HomepageTweets: FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="stretch">
      {homepageTweets.map((tweet, index: number) => (
        <Grid key={`${tweet.url}-${index}`} item md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography className={classes.title} color="textSecondary">
                    {tweet.username}
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.title} color="textSecondary">
                    {tweet.date}
                  </Typography>
                </Box>
              </Box>
              <Typography color="textPrimary">{tweet.text}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                size="small"
                startIcon={<TwitterIcon />}
                target="_blank"
                rel="noopener"
                href={tweet.url}
                color="primary"
              >
                Voir le tweet
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomepageTweets;
