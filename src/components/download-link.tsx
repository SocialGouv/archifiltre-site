import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import React, { FC, useCallback } from "react";

import { trackAppDownload } from "../tracker";

type DownloadLinkProps = {
  url: string;
  label: string;
  version: string;
};

const DownloadLink: FC<DownloadLinkProps> = ({ url, label, version }) => {
  const onClick = useCallback(() => {
    trackAppDownload(version, label);
  }, [version, label]);

  return (
    <Button
      target="_blank"
      href={url}
      color="primary"
      rel="noopener"
      onClick={onClick}
      startIcon={<GetAppIcon />}
    >
      {label}
    </Button>
  );
};

export default DownloadLink;
