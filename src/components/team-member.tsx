import { Card } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

type TeamMemberProps = {
  job: string;
  name: string;
  photo: string;
  url: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: 120,
      minWidth: 200,
    },
  })
);

const TeamMember: FC<TeamMemberProps> = ({ job, name, photo, url }) => {
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
      <CardActions>
        <Button
          size="small"
          startIcon={<LinkedInIcon />}
          target="_blank"
          rel="noopener"
          href={url}
        >
          Voir le profil
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeamMember;
