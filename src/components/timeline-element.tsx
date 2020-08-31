import { Link, Typography } from "@material-ui/core";
import { TimelineOppositeContent } from "@material-ui/lab";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React, { FC, ReactNode } from "react";

type TimelineElementProps = {
  title: string;
  date: string;
  link?: string;
  icon?: ReactNode;
  isMajor: boolean;
  isConnectorDisplayed: boolean;
};

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
        <TimelineDot color={isMajor ? "primary" : "inherit"}>
          {icon}
        </TimelineDot>
      ) : (
        <TimelineDot color={isMajor ? "primary" : "inherit"} />
      )}
      {isConnectorDisplayed && <TimelineConnector />}
    </TimelineSeparator>
    <TimelineContent>
      <Typography color={isMajor ? "primary" : "inherit"}>{title}</Typography>
      {link && (
        <div>
          <Link href={link} target="_blank" rel="noopener">
            En savoir plus
          </Link>
        </div>
      )}
    </TimelineContent>
  </TimelineItem>
);

export default TimelineElement;
