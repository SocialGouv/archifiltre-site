import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { graphql, StaticQuery } from "gatsby";
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

const Presentation: FC = () => (
  <StaticQuery
    query={imageQuery}
    render={(data) => (
      <Grid container spacing={1} alignItems="center">
        <Grid item md={6}>
          <Grid container spacing={6}>
            {presentationData.map((presentationItem) => (
              <Grid item md={6} key={presentationItem.title}>
                <Typography variant="h6" color="textPrimary">
                  <Box>{presentationItem.logo}</Box>
                  <Box>{presentationItem.title}</Box>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Grid>
      </Grid>
    )}
  />
);

export default Presentation;
