import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

import SEO from "../components/seo";
import TeamMember from "../components/team-member";
import TimelineElement from "../components/timeline-element";
import { currentMembers, oldMembers } from "../display-data/team-data";
import { timelineElements } from "../display-data/timeline-data";
import Layout from "../layout";

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      width: "100%",
    },
  })
);

const Downloads: FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Qui sommes-nous ?" />
      <Box p={3} textAlign="center">
        <Typography component="h1" variant="h5" color="textPrimary">
          Qui sommes-nous ?
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="body1">
          Le produit Archifiltre est développé au sein d&rsquo;une start-up
          d&rsquo;Etat faisant partie de la Fabrique numérique des ministères
          sociaux. L&rsquo;équipe associe les archivistes des ministères sociaux
          et des profils techniques complémentaires (Développeur, UX designer,
          Product Manager, etc) pour développer un outil avec les méthodes
          agiles en co-construction permanente avec ses utilisateur·trice·s.
        </Typography>
      </Box>
      <Box p={3} textAlign="center">
        <Typography variant="h5" color="textPrimary">
          L&rsquo;équipe
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {currentMembers.map(({ job, name, photo, url }) => (
          <Grid key={name} item md={3} className={classes.grid}>
            <TeamMember job={job} name={name} photo={photo} url={url} />
          </Grid>
        ))}
      </Grid>
      <Box p={3} textAlign="center">
        <Typography variant="h5" color="textPrimary">
          Ils ont aussi participé
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {oldMembers.map(({ job, name, photo, url }) => (
          <Grid key={name} item md={3} className={classes.grid}>
            <TeamMember job={job} name={name} photo={photo} url={url} />
          </Grid>
        ))}
      </Grid>
      <Box p={3} textAlign="center">
        <Typography variant="h5" color="textPrimary">
          Historique du projet
        </Typography>
      </Box>
      <Timeline align="alternate">
        {timelineElements.map(
          ({ title, date, link, icon, isMajor = false }, index) => (
            <TimelineElement
              title={title}
              date={date}
              link={link}
              icon={icon}
              isMajor={isMajor}
              isConnectorDisplayed={index !== timelineElements.length - 1}
              key={`${date}-${index}`}
            />
          )
        )}
      </Timeline>
    </Layout>
  );
};

export default Downloads;
