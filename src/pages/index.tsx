import React, { FC } from 'react'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Layout from '../layout'
import SEO from '../components/seo'
import HomepageHeader from '../components/homepage-header'
import Box from '@material-ui/core/Box'
import { Link as GatsbyLink } from 'gatsby'
import Presentation from '../components/presentation'
import ProductFeatures from '../components/product-features'
import Typography from '@material-ui/core/Typography'
import HomepageTweets from '../components/homepage-tweets'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme: Theme) => ({
  headerButtons: {
    marginTop: theme.spacing(4),
  },
  downloadLink: {
    paddingTop: theme.spacing(3),
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <HomepageHeader
        title="archifiltre"
        description="Vos fichiers et dossiers, comme vous ne les avez jamais vus."
      >
        <div className={classes.headerButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                target="_blank"
                href="https://github.com/SocialGouv/archifiltre/releases/download/v3.0.0/archifiltre.exe"
                variant="contained"
                size="large"
                color="primary"
              >
                Télécharger
              </Button>
            </Grid>
            <Grid item>
              <Button
                target="_blank"
                href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"
                size="large"
                variant="contained"
              >
                Documentation
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.downloadLink}>
            <Grid item>
              <Button
                color="inherit"
                component={GatsbyLink}
                to="/downloads"
                size="small"
              >
                Besoin d&rsquo;une ancienne version ?
              </Button>
            </Grid>
          </Grid>
        </div>
      </HomepageHeader>
      <Box p={3} pb={6} textAlign="center">
        <Box p={3}>
          <Typography variant="h5" color="textPrimary">
            Fonctionnalités
          </Typography>
        </Box>
        <Presentation />
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
              size="small"
              endIcon={<ArrowForwardIcon />}
            >
              Tous les avis
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
