import { Button, Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/styles";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

import HomepageHeader from "../components/homepage-header";
import HomepageTweets from "../components/homepage-tweets";
import Presentation from "../components/presentation";
import ProductFeatures from "../components/product-features";
import SEO from "../components/seo";
import versions from "../display-data/versions";
import Layout from "../layout";
import { defaultOperatingSystem, getOperatingSystem } from "../utils/os-util";

const useStyles = makeStyles((theme: Theme) => ({
  downloadLink: {
    paddingTop: theme.spacing(3),
  },
  headerButtons: {
    marginTop: theme.spacing(4),
  },
}));

const getDownloadLink = (): string => {
  const userOperatingSystem = getOperatingSystem();
  if (versions?.length <= 0) {
    return "";
  }
  const lastVersion = versions[0];
  const lastVersionPlatform =
    lastVersion.platforms.find(
      (platform) => platform?.id === userOperatingSystem
    ) || lastVersion.platforms[defaultOperatingSystem];
  return lastVersionPlatform?.url;
};

const IndexPage: FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Accueil" />
      <HomepageHeader title="Vos fichiers et dossiers, comme vous ne les avez jamais vus">
        <div className={classes.headerButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                target="_blank"
                href={getDownloadLink()}
                variant="contained"
                size="large"
                color="primary"
                startIcon={<GetAppIcon />}
              >
                Télécharger
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.downloadLink}>
            <Grid item>
              <Button
                color="inherit"
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
          <Typography variant="h5" color="textPrimary">
            Ce qu&rsquo;Archifiltre permet
          </Typography>
        </Box>
        <Presentation />
        <Grid container justify="center" className={classes.downloadLink}>
          <Grid item>
            <Button
              color="inherit"
              target="_blank"
              href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"
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
      <Box p={3} textAlign="center">
        <Box p={3}>
          <Typography variant="h5" color="textPrimary">
            Ils parlent de nous
          </Typography>
        </Box>
        <HomepageTweets />
        <Grid container justify="center">
          <Grid item>
            <Button
              color="inherit"
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
