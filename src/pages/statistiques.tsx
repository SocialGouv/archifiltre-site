import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";

import SEO from "../components/seo";
import StatisticsGroup from "../components/statistics-group";
import { statisticsLayout } from "../display-data/statistics";
import Layout from "../layout";
import { Statistic } from "../types/statistic-types";
import { sanitizeStatistics } from "../utils/statistics-util";

const minutesSinceTimestamp = (lastFetchTimestamp: number) => {
  const timeDifference = Date.now() - lastFetchTimestamp;
  return Math.floor(timeDifference / (60 * 1000));
};

const Statistiques = () => {
  // eslint-disable-next-line no-unused-vars
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(0);

  useEffect(() => {
    const fetchStatistics = async () => {
      // setIsLoading(true);
      const fetchedStatistics = await axios
        .get(`${process.env.STATISTICS_URL}/statistics`)
        .then(({ data }) => data);
      const sanitizedStatistics = sanitizeStatistics(fetchedStatistics.result);
      setLastFetchTimestamp(fetchedStatistics.lastFetchTimestamp);
      setStatistics(sanitizedStatistics);
      setIsLoading(false);
    };
    fetchStatistics();
  }, []);

  const minutesSinceLastFetch = minutesSinceTimestamp(lastFetchTimestamp);

  return (
    <Layout>
      <SEO title="Statistiques" />
      <Box p={3} textAlign="center">
        <Typography component="h1" variant="h4" color="textPrimary">
          Statistiques (depuis le 1<sup>er</sup> janvier 2020)
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box maxWidth="960px">
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <CircularProgress />
              <div>Chargement en cours...</div>
            </Box>
          ) : (
            <Box>
              {statisticsLayout.map((group, index) => (
                <Box key={index} marginBottom={5}>
                  <StatisticsGroup group={group} />
                </Box>
              ))}
              <Box display="flex" justifyContent="center">
                <Typography variant="body2" gutterBottom>
                  {`Dernière mise à jour il y a ${
                    minutesSinceLastFetch || "< 1"
                  } minute(s)`}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Statistiques;
