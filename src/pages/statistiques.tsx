import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

import SEO from "../components/seo";
import Layout from "../layout";
import { Statistic } from "../types/statistic-types";
import { sanitizeStatistics } from "../utils/statistics-util";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      minHeight: 120,
      minWidth: 200,
    },
    grid: {
      width: "100%",
    },
    statsCount: {
      textAlign: "center",
    },
  })
);

const minutesSinceTimestamp = (lastFetchTimestamp: number) => {
  const timeDifference = Date.now() - lastFetchTimestamp;
  return Math.floor(timeDifference / (60 * 1000));
};

const Statistiques = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
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
          <Grid container spacing={2}>
            {statistics.map(({ label, value }) => (
              <Grid item md={3} key={label} className={classes.grid}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {label}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      color="primary"
                      className={classes.statsCount}
                    >
                      <strong>{value}</strong>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center">
            <Typography variant="body2" gutterBottom>
              {`Dernière mise à jour il y a ${
                minutesSinceLastFetch || "< 1"
              } minute(s)`}
            </Typography>
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default Statistiques;
