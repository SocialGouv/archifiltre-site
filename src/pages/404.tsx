import { Typography } from "@material-ui/core";
import React, { FC } from "react";

import SEO from "../components/seo";
import Layout from "../layout";

const NotFoundPage: FC = () => (
  <Layout container>
    <SEO title="404: Not found" />
    <Typography variant="h2" gutterBottom component="h1">
      404 NOT FOUND
    </Typography>
    <Typography variant="body1">
      Vous tentez d&#39;accéder à une page qui n&#39;existe pas... C&#39;est
      triste.
    </Typography>
  </Layout>
);

export default NotFoundPage;
