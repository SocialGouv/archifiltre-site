import React, { FC } from 'react'
import { Box, Theme } from '@material-ui/core'
import { homepageTweets } from '../display-data/tweets-data'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))

const HomepageTweets: FC = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="space-between">
      {homepageTweets.map((tweet, index: number) => (
        <Card className={classes.root} key={`${tweet.url}-${index}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {tweet.text}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {tweet.username} - {tweet.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              startIcon={<TwitterIcon />}
              target="_blank"
              href={tweet.url}
            >
              Voir le tweet
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default HomepageTweets
