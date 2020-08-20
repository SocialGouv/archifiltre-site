import React, { FC } from 'react'
import SEO from '../components/seo'
import Layout from '../layout'
import TweetEmbed from 'react-tweet-embed'
import { Box } from '@material-ui/core'
import { tweetIds } from '../display-data/tweets-data'

const Social: FC = () => {
  return (
    <Layout>
      <SEO title="Social" />
      <Box>
        {tweetIds.map((tweet: string, index: number) => (
          <TweetEmbed
            key={`${tweet}-${index}`}
            id={tweet}
            placeholder={'Chargement du tweet en cours...'}
          />
        ))}
      </Box>
    </Layout>
  )
}

export default Social
