import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

import DownloadLink from "../components/download-link";
import SEO from "../components/seo";
import versions from "../display-data/versions";
import Layout from "../layout";

const Downloads: FC = () => {
  return (
    <Layout>
      <SEO title="Téléchargements" />
      <Box p={1}>
        <h1>Téléchargements</h1>
        <h3>Script</h3>
        <Box>
          <DownloadLink
            url="https://raw.githubusercontent.com/SocialGouv/archifiltre/master/scripts/load-from-filesystem.ps1"
            label="Windows"
          />
        </Box>
        <Box>
          <DownloadLink
            url="https://raw.githubusercontent.com/SocialGouv/archifiltre/master/scripts/load-filesystem.sh"
            label="Linux/MacOS"
          />
        </Box>
        {versions.map((version) => (
          <div key={`${version.name}-${version.number}`}>
            <h3>
              {`${version.name} ${version.number} - ${version.date} - `}
              <Button
                color="inherit"
                component={GatsbyLink}
                to="/changelog"
                size="small"
              >
                Nouveautés de cette version
              </Button>
            </h3>
            <Box>
              {version.platforms.map((platform) => (
                <Box key={`${platform.name}-${version.number}`}>
                  <DownloadLink url={platform.url} label={platform.name} />
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    </Layout>
  );
};

export default Downloads;
