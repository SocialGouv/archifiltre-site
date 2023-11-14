import React from "react";

import SEO from "../components/seo";
import { useRedirect } from "../hooks/useRedirect";

React;

const MentionsLegales = () => {
  useRedirect("/mentions-legales");
  return (
    <>
      <SEO title="Mentions légales" />;
    </>
  );
};

export default MentionsLegales;
