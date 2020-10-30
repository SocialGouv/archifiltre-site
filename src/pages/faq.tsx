import { Accordion } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { FC } from "react";

import SEO from "../components/seo";
import { faqData } from "../display-data/faq-data";
import Layout from "../layout";

const FAQ: FC = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <Box p={3} textAlign="center">
        <Typography component="h1" variant="h4" color="textPrimary">
          FAQ
        </Typography>
      </Box>
      <Box>
        {faqData.map(({ question, answer }, index) => (
          <Accordion key={question}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{answer}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Layout>
  );
};

export default FAQ;
