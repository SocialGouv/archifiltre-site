import { Box } from "@material-ui/core";
import React, { FC } from "react";
import TweetEmbed from "react-tweet-embed";

import SEO from "../components/seo";
import { tweetIds } from "../display-data/tweets-data";
import Layout from "../layout";

const Social: FC = () => {
  return (
    <Layout>
      <SEO title="Social" />
      <Box>
        {tweetIds.map((tweet: string, index: number) => (
          <TweetEmbed
            key={`${tweet}-${index}`}
            id={tweet}
            placeholder={"Chargement du tweet en cours..."}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default Social;
