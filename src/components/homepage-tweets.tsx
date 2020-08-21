import { Box, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

import { homepageTweets } from "../display-data/tweets-data";

const useStyles = makeStyles((theme: Theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    margin: theme.spacing(2),
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
}));

const HomepageTweets: FC = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="space-between">
      {homepageTweets.map((tweet, index: number) => (
        <Card className={classes.root} key={`${tweet.url}-${index}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {tweet.text}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {tweet.username} - {tweet.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              startIcon={<TwitterIcon />}
              target="_blank"
              href={tweet.url}
            >
              Voir le tweet
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default HomepageTweets;
