import { Collapse } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToggle } from "react-use";

import SEO from "../components/seo";
import ShowMoreButton from "../components/statistics/show-more";
import StatisticsGroup from "../components/statistics/statistics-group";
import StatisticsLoading from "../components/statistics/statistics-loading";
import { statisticsLayout } from "../display-data/statistics";
import Layout from "../layout";
import {
  RenderingStatisticConfig,
  StatisticsGroup as StatisticsGroupType,
} from "../types/statistic-types";
import { formatStatistics } from "../utils/statistics-util";

const minutesSinceTimestamp = (lastFetchTimestamp: number) => {
  const timeDifference = Date.now() - lastFetchTimestamp;
  return Math.floor(timeDifference / (60 * 1000));
};

const Statistiques = () => {
  const [statistics, setStatistics] = useState<
    StatisticsGroupType<RenderingStatisticConfig>[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(0);
  const [showMore, toggleShowMore] = useToggle(false);

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
      const fetchedStatistics = await axios
        .get(`${process.env.STATISTICS_URL}/statistics`)
        .then(({ data }) => data);
      const sanitizedStatistics = formatStatistics(statisticsLayout)(
        fetchedStatistics.result
      );
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
          Statistiques
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box maxWidth="960px">
          {isLoading ? (
            <StatisticsLoading />
          ) : (
            <Box>
              {statistics.length > 0 && (
                <Box marginBottom={5}>
                  <StatisticsGroup group={statistics[0]} />
                </Box>
              )}

              <Collapse in={showMore}>
                {statistics.slice(1).map((group, index) => (
                  <Box key={index} marginBottom={5}>
                    <StatisticsGroup group={group} />
                  </Box>
                ))}
              </Collapse>
              <Box display="flex" justifyContent="center">
                <ShowMoreButton
                  showMore={showMore}
                  toggleShowMore={toggleShowMore}
                />
              </Box>
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
