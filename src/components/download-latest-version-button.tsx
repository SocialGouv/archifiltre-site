import { defaultOperatingSystem, getOperatingSystem, OS } from '../utils/os-util'
import versions from '../display-data/versions'
import GetAppIcon from '@material-ui/icons/GetApp'
import { Button, Theme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { trackAppDownload } from '../tracker'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  downloadButton: {
    fontWeight: "bold",
  },
}));

const getDownloadLink = (): string => {
  const userOperatingSystem = getOperatingSystem();
  if (versions?.length <= 0) {
    return "";
  }
  const lastVersion = versions[0];
  const lastVersionPlatform =
    lastVersion.platforms.find(
      (platform) => platform?.id === userOperatingSystem
    ) || lastVersion.platforms[defaultOperatingSystem];
  return lastVersionPlatform.url;
};


const DownloadLatestVersionButton = () => {
  const classes = useStyles();
  const [downloadLink, setDownloadLink] = useState(getDownloadLink());

  useEffect(() => {
    setDownloadLink(getDownloadLink());
  }, [setDownloadLink])

  const onDownloadClick = () => {
    const userOperatingSystem = OS[getOperatingSystem()];
    trackAppDownload(versions[0].number, userOperatingSystem);
  };

  // We prevent the button from being server-side rendered
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <Button
      target="_blank"
      rel="noopener"
      href={downloadLink}
      variant="contained"
      size="large"
      color="primary"
      onClick={onDownloadClick}
      startIcon={<GetAppIcon />}
      className={classes.downloadButton}
    >
      Télécharger
    </Button>
  )
}

export default DownloadLatestVersionButton;
