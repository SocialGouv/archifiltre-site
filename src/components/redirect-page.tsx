import { Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { navigate } from "gatsby";
import React, { FC, useEffect } from "react";

import Layout from "../layout";

type RedirectPageProps = {
  url: string;
};

const RedirectPage: FC<RedirectPageProps> = ({ url }) => {
  useEffect(() => {
    navigate(url);
  }, [url]);

  return (
    <Layout>
      <Box>
        <Typography>Redirection en cours...</Typography>
        <Typography>
          Si vous {"n'êtes"} pas redirigés, cliquez <Link href={url}>ici</Link>
        </Typography>
      </Box>
    </Layout>
  );
};

export default RedirectPage;
