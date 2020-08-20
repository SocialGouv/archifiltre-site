import React, { FC } from 'react'
import { Grid, Theme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { featureData } from '../display-data/feature-data'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 2, 6),
    margin: -theme.spacing(2),
  },
}))

const ProductFeatures: FC = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.content} alignItems="center" spacing={4}>
      {featureData.map(feature => (
        <Grid item md={4} key={feature.title}>
          <Box>
            <Box>
              <Typography variant="h5" color="textPrimary">
                {feature.icon} {feature.title}
              </Typography>
            </Box>
            <Box>{feature.description}</Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductFeatures
