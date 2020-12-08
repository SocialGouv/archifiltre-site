import React, { useEffect, useState } from "react";
import SEO from "../components/seo";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Layout from "../layout";
import axios from "axios";
import { sanitizeStatistics, Statistic } from "../utils/statistics-util";
import CircularProgress from "@material-ui/core/CircularProgress";

const Statistiques = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
      const fetchedStatistics = await axios
        .get(`${process.env.STATISTICS_URL}/statistics`)
        .then(({ data }) => data);
      const sanitizedStatistics = sanitizeStatistics(fetchedStatistics);
      setStatistics(sanitizedStatistics);
      setIsLoading(false);
    };
    fetchStatistics();
  }, []);

  return (
    <Layout>
      <SEO title="Statistiques" />
      <Box p={3} textAlign="center">
        <Typography component="h1" variant="h4" color="textPrimary">
          Statistiques
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
        <Grid container spacing={3}>
          {statistics.map(({ label, value }) => (
            <Grid item xs={3} key={label}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {label}
                  </Typography>
                  <Typography variant="h5" component="h2" color="primary">
                    <strong>{value}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Statistiques;
