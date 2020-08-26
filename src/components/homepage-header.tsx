import { Container, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    margin: -theme.spacing(2),
    padding: theme.spacing(8, 0, 6),
  },
}));

export interface HomepageHeaderProps {
  title: string;
}

const HomepageHeader: FC<HomepageHeaderProps> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        {children}
      </Container>
    </div>
  );
};

export default HomepageHeader;
