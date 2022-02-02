import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

import DownloadLink from "../components/download-link";
import HashLink from "../components/hash-link";
import SEO from "../components/seo";
import versions from "../display-data/versions";
import Layout from "../layout";
import { getPlatformName, Platform } from "../utils/os-util";

const Telechargements: FC = () => (
  <Layout>
    <SEO title="Téléchargements" />
    <Box p={1}>
      <h1>Téléchargements</h1>
      <h3>Script d&rsquo;import (serveur)</h3>
      <Box>
        <DownloadLink
          url="https://raw.githubusercontent.com/SocialGouv/archifiltre-docs/main/scripts/load-from-filesystem.ps1"
          label="Windows"
          version="Script"
        />
      </Box>
      <Box>
        <DownloadLink
          url="https://raw.githubusercontent.com/SocialGouv/archifiltre-docs/main/scripts/load-filesystem.sh"
          label="Linux/MacOS"
          version="Script"
        />
      </Box>
      {versions.map((version) => (
        <div key={`${version.name}-${version.number}`}>
          <h3>
            {`v${version.number} ${version.name} - ${version.date} - `}
            <Button
              color="primary"
              component={GatsbyLink}
              to={`/produit#${version.number.replace(/\./g, "")}`}
              size="small"
            >
              Nouveautés
            </Button>
          </h3>
          <Box>
            {version.platforms.map((platform: Platform) => {
              const platformName = getPlatformName(platform);
              return (
                <Box key={`${platformName}-${version.number}`}>
                  <DownloadLink
                    url={platform.url}
                    label={platformName}
                    version={version.number}
                  />
                  {platform.hashUrl && (
                    <Box display="inline">
                      {" - "}
                      <HashLink url={platform.hashUrl} label="Hash" />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </div>
      ))}
    </Box>
  </Layout>
);

export default Telechargements;
