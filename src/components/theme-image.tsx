import Img, { FluidObject } from "gatsby-image";
import React, { FC } from "react";

import { ThemeContext } from "../layout";

type ThemeImageProps = {
  lightThemeImage: FluidObject;
  darkThemeImage: FluidObject;
  alt: string;
};

const ThemeImage: FC<ThemeImageProps> = ({
  lightThemeImage,
  darkThemeImage,
  alt,
}) => (
  <ThemeContext.Consumer>
    {(theme) =>
      theme === "light" ? (
        <Img fluid={lightThemeImage} alt={alt} />
      ) : (
        <Img fluid={darkThemeImage} alt={alt} />
      )
    }
  </ThemeContext.Consumer>
);

export default ThemeImage;
