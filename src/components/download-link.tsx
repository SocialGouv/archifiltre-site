import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'

type DownloadLinkProps = {
  url: string
  label: string
}

const DownloadLink: FC<DownloadLinkProps> = ({ url, label }) => (
  <Button target="_blank" href={url} color="inherit">
    <GetAppIcon />
    {label}
  </Button>
)

export default DownloadLink
