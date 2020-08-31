import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import React, { FC } from "react";

type DownloadLinkProps = {
  url: string;
  label: string;
};

const DownloadLink: FC<DownloadLinkProps> = ({ url, label }) => (
  <Button target="_blank" href={url} color="inherit" rel="noopener">
    <GetAppIcon />
    {label}
  </Button>
);

export default DownloadLink;
