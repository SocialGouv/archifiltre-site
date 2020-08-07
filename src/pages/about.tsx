import React, { FC } from 'react'
import SEO from '../components/seo'
import Layout from '../layout'
import Timeline from '@material-ui/lab/Timeline'
import TimelineElement from '../components/timeline-element'
import { timelineElements } from '../display-data/timeline-data'

const Downloads: FC = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <Timeline align="alternate">
        {timelineElements.map(
          ({ title, date, link, icon, isMajor = false }, index) => (
            <TimelineElement
              title={title}
              date={date}
              link={link}
              icon={icon}
              isMajor={isMajor}
              isConnectorDisplayed={index !== timelineElements.length - 1}
              key={`${date}-${index}`}
            />
          ),
        )}
      </Timeline>
    </Layout>
  )
}

export default Downloads
