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
import { useRedirect } from "../hooks/useRedirect";
import Layout from "../layout";
import {
  RenderingStatisticConfig,
  StatisticsGroup as StatisticsGroupType,
} from "../types/statistic-types";
import { formatStatistics } from "../utils/statistics-util";

const DEFAULT_VISIBLE_BLOCK = 1;

const minutesSinceTimestamp = (lastFetchTimestamp: number) => {
  const timeDifference = Date.now() - lastFetchTimestamp;
  return Math.floor(timeDifference / (60 * 1000));
};

const getStat = async (slug: string) =>
  await axios
    .get(`${process.env.STATISTICS_URL}/${slug}`)
    .then(({ data }) => data);

const Statistiques = () => {
  const [statistics, setStatistics] = useState<
    StatisticsGroupType<RenderingStatisticConfig>[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(0);
  const [showMore, toggleShowMore] = useToggle(false);

  useRedirect("/stats");

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
      const fetchedStatistics = await getStat("statistics");
      const fetchedFixedStatistics = await getStat("statistics-fix");
      const cumulatedStatistics = [
        ...fetchedStatistics.result,
        ...fetchedFixedStatistics.result,
      ];

      const sanitizedStatistics =
        formatStatistics(statisticsLayout)(cumulatedStatistics);

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
              {statistics.length > 0 &&
                statistics
                  .slice(0, DEFAULT_VISIBLE_BLOCK)
                  .map((group, index) => (
                    <Box marginBottom={5} key={index}>
                      <StatisticsGroup group={group} />
                    </Box>
                  ))}

              <Collapse in={showMore}>
                {statistics.slice(DEFAULT_VISIBLE_BLOCK).map((group, index) => (
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
