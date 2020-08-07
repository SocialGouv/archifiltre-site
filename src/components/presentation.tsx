import React, { FC } from 'react'
import { presentationData } from '../display-data/presentation-data'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    height: 200,
  },
})

const Presentation: FC = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="center">
      {presentationData.map(presentationItem => (
        <Grid item key={presentationItem.title}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={presentationItem.image}
                title={presentationItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="h2">
                  {presentationItem.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Presentation
