import { Button, Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/styles";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

import DownloadLatestVersionButton from "../components/download-latest-version-button";
import HomepageHeader from "../components/homepage-header";
import HomepageTweets from "../components/homepage-tweets";
import Presentation from "../components/presentation";
import ProductFeatures from "../components/product-features";
import SEO from "../components/seo";
import { useRedirect } from "../hooks/useRedirect";
import Layout from "../layout";

const useStyles = makeStyles((theme: Theme) => ({
  downloadLink: {
    paddingTop: theme.spacing(3),
  },
  headerButtons: {
    marginTop: theme.spacing(4),
  },
}));

const IndexPage: FC = () => {
  const classes = useStyles();
  useRedirect("/");

  return (
    <Layout>
      <SEO title="Accueil" />
      <HomepageHeader title="Visualisez et améliorez vos arborescences de fichiers !">
        <div className={classes.headerButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <DownloadLatestVersionButton />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.downloadLink}>
            <Grid item>
              <Button
                color="primary"
                component={GatsbyLink}
                to="/telechargements"
                size="small"
              >
                Besoin d&rsquo;une autre version ?
              </Button>
            </Grid>
          </Grid>
        </div>
      </HomepageHeader>
      <Box p={3} pb={6} textAlign="center">
        <Box p={3} pb={6}>
          <Typography variant="h4" component="h2" color="textPrimary">
            Ce que Docs par Archifiltre permet
          </Typography>
        </Box>
        <Presentation />
        <Grid container justify="center" className={classes.downloadLink}>
          <Grid item>
            <Button
              color="primary"
              target="_blank"
              rel="noopener"
              href="https://github.com/SocialGouv/archifiltre-docs/wiki/Wiki-Archifiltre"
              endIcon={<ArrowForwardIcon />}
            >
              Documentation
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <ProductFeatures />
      </Box>
      <Box p={3}>
        <Box p={3} textAlign="center">
          <Typography variant="h4" component="h2" color="textPrimary">
            Ils parlent de nous
          </Typography>
        </Box>
        <Box pb={2}>
          <HomepageTweets />
        </Box>
        <Grid container justify="center">
          <Grid item>
            <Button
              color="primary"
              component={GatsbyLink}
              to="/social"
              endIcon={<ArrowForwardIcon />}
            >
              Tous les avis
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
