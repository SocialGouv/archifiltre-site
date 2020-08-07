import React, { FC } from 'react'
import SEO from '../components/seo'
import Layout from '../layout'
import Box from '@material-ui/core/Box'
import versions from '../display-data/versions'
import DownloadLink from '../components/download-link'

const Downloads: FC = () => {
  return (
    <Layout>
      <SEO title="Téléchargements" />
      <Box p={1}>
        <h2>Téléchargements</h2>
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
        {versions.map(version => (
          <div key={`${version.name}-${version.number}`}>
            <h3>
              {version.name} {version.number} - {version.date}
            </h3>
            <Box>
              {version.platforms.map(platform => (
                <Box key={`${platform.name}-${version.number}`}>
                  <DownloadLink url={platform.url} label={platform.name} />
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    </Layout>
  )
}

export default Downloads
