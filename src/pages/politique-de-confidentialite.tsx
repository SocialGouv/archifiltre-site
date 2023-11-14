import React from "react";

import SEO from "../components/seo";
import { useRedirect } from "../hooks/useRedirect";

React;

const Politiques = () => {
  useRedirect("/politiques-de-confidentialite");
  return (
    <>
      <SEO title="Politiques de confidentialité" />;
    </>
  );
};

export default Politiques;
