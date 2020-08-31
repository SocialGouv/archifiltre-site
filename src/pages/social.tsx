import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import React, { FC, useCallback, useState } from "react";
import TweetEmbed from "react-tweet-embed";

import SEO from "../components/seo";
import { tweetIds } from "../display-data/tweets-data";
import Layout from "../layout";

const Social: FC = () => {
  const theme = useTheme();

  const [isLoaded, setIsLoaded] = useState(false);

  const onTweetLoad = useCallback(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <Layout>
      <SEO title="Social" />
      {!isLoaded && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <CircularProgress />
          <div>Chargement des tweets en cours...</div>
        </Box>
      )}
      <Grid container spacing={1}>
        {tweetIds.map((tweet: string, index: number) => (
          <Grid key={`${tweet}-${index}`} item md={6}>
            <TweetEmbed
              id={tweet}
              onTweetLoadSuccess={onTweetLoad}
              onTweetLoadError={onTweetLoad}
              options={{ theme: theme.palette.type }}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Social;
