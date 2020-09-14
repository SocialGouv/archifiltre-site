import { Box, Grid, Link, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { FC } from "react";

import { presentationData } from "../display-data/presentation-data";

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "presentation.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    "&>svg": {
      height: "auto",
      width: theme.spacing(6),
    },
  },
  root: {
    width: "100%",
  },
}));

const Presentation: FC = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={imageQuery}
      render={(data) => (
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item md={6}>
            <Grid container spacing={4} justify="center">
              {presentationData.map((presentationItem) => (
                <Grid item md={6} key={presentationItem.title}>
                  <Typography variant="h5" color="textPrimary">
                    <Box className={classes.icon}>{presentationItem.logo}</Box>
                    <Box>{presentationItem.title}</Box>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item md={6} className={classes.root}>
            <Link to="/produit" component={GatsbyLink}>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Screenshot d'Archifiltre"
              />
            </Link>
          </Grid>
        </Grid>
      )}
    />
  );
};

export default Presentation;
