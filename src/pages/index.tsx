import React, { FC } from 'react'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import Box from '@material-ui/core/Box'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  downloadLink: {
    paddingTop: theme.spacing(3),
  },
}))

const features = [
  {
    title: 'Rapide',
    description:
      'Archifiltre analyse vos arborescences en un rien de temps.Archifiltre analyse vos arborescences en un rien de temps.Archifiltre analyse vos arborescences en un rien de temps',
    icon: <FlashOnIcon />,
  },
  {
    title: 'Rapide2',
    description: 'Archifiltre analyse vos arborescences en un rien de temps',
    icon: <FlashOnIcon />,
  },
  {
    title: 'Rapide3',
    description: 'Archifiltre analyse vos arborescences en un rien de temps',
    icon: <FlashOnIcon />,
  },
  {
    title: 'Rapide4',
    description: 'Archifiltre analyse vos arborescences en un rien de temps',
    icon: <FlashOnIcon />,
  },
  {
    title: 'Rapide5',
    description: 'Archifiltre analyse vos arborescences en un rien de temps',
    icon: <FlashOnIcon />,
  },
]

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
      <Grid container spacing={2}>
        <Grid item>text</Grid>
        <Grid item>image</Grid>
      </Grid>
      <Grid container spacing={2}>
        {features.map(feature => (
          <Grid item md={4} key={feature.title}>
            <Box>
              <Box>
                {feature.icon}&nbsp;{feature.title}
              </Box>
              <Box>{feature.description}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
