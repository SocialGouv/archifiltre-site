import { Card } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

type TeamMemberProps = {
  job: string;
  name: string;
  photo: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: 100,
      minWidth: 200,
    },
  })
);

const TeamMember: FC<TeamMemberProps> = ({ job, name, photo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={photo} alt={name} width={40} height="auto" />
          </Avatar>
        }
        title={name}
        subheader={job}
      />
    </Card>
  );
};

export default TeamMember;
