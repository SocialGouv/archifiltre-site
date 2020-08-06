import React, { FC } from 'react'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
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
      <Hero
        title="archifiltre"
        description="Vos fichiers et dossiers, comme vous ne les avez jamais vus."
      >
        <div className={classes.heroButtons}>
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
      </Hero>
    </Layout>
  )
}

export default IndexPage
