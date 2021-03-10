import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { FC } from "react";

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const StatisticMapChart: FC = () => {
  return (
    <StaticQuery
      query={imageQuery}
      render={(data) => (
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Carte d'utilisation d'Archifiltre"
        />
      )}
    />
  );
};

export default StatisticMapChart;
