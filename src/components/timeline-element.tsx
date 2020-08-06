import React, { FC, ReactNode } from 'react'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import { TimelineOppositeContent } from '@material-ui/lab'
import { Link as GatsbyLink } from 'gatsby'
import { Typography, Link } from '@material-ui/core'

type TimelineElementProps = {
  title: string
  date: string
  link?: string
  icon?: ReactNode
  isMajor: boolean
  isConnectorDisplayed: boolean
}

const TimelineElement: FC<TimelineElementProps> = ({
  title,
  date,
  link,
  icon,
  isMajor,
  isConnectorDisplayed,
}) => (
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography color="textSecondary">{date}</Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      {icon ? (
        <TimelineDot color={isMajor ? 'primary' : 'inherit'}>
          {icon}
        </TimelineDot>
      ) : (
        <TimelineDot color={isMajor ? 'primary' : 'inherit'} />
      )}
      {isConnectorDisplayed && <TimelineConnector />}
    </TimelineSeparator>
    <TimelineContent>
      <Typography color={isMajor ? 'primary' : ''}>{title}</Typography>
      {link && (
        <div>
          <Link component={GatsbyLink} to={link} target="_blank">
            En savoir plus
          </Link>
        </div>
      )}
    </TimelineContent>
  </TimelineItem>
)

export default TimelineElement
