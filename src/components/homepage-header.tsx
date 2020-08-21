import { Container, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    margin: -theme.spacing(2),
    padding: theme.spacing(8, 0, 6),
  },
  title: {
    fontFamily: "Quicksand",
    letterSpacing: "0.16rem",
  },
}));

export interface HomepageHeaderProps {
  title: string;
  description?: string;
}

const HomepageHeader: FC<HomepageHeaderProps> = ({
  title,
  description = "",
  children,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          className={classes.title}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {description}
        </Typography>
        {children}
      </Container>
    </div>
  );
};

export default HomepageHeader;
