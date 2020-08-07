import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { featureData } from '../display-data/feature-data'
import Typography from '@material-ui/core/Typography'

const ProductFeatures: FC = () => (
  <Grid container spacing={2}>
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

export default ProductFeatures
