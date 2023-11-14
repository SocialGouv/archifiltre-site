import React from "react";

import SEO from "../components/seo";
import { useRedirect } from "../hooks/useRedirect";

const Produit = () => {
  useRedirect("/");
  return (
    <>
      <SEO title="Produit" />
    </>
  );
};

export default Produit;
