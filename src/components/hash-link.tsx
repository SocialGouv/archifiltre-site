import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React, { FC } from "react";

type HashLinkProps = {
  url: string;
  label: string;
};

const HashLink: FC<HashLinkProps> = ({ url, label }) => (
  <Button
    target="_blank"
    href={url}
    color="primary"
    rel="noopener"
    size="small"
    startIcon={<LockIcon />}
  >
    {label}
  </Button>
);

export default HashLink;
