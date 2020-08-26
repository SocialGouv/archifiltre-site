import { AppBar, Button, Link, Theme, Toolbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/styles";
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { FC } from "react";

import MobileHeader from "../components/mobile-header";
import { HeaderLink, headerLinks } from "../display-data/header-links";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {},
});

export interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const logoQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 160, height: 18) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoWhite: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fixed(width: 170, height: 18) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header: FC<HeaderProps> = ({ onToggleTheme, theme }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <StaticQuery
      query={logoQuery}
      render={(data) => (
        <AppBar component="header" position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <Link
              to="/"
              component={GatsbyLink}
              color="inherit"
              className={classes.link}
            >
              <Img
                alt="Logo Archifiltre"
                fixed={
                  theme === "light"
                    ? data.logo.childImageSharp.fixed
                    : data.logoWhite.childImageSharp.fixed
                }
              />
            </Link>
            <Box flex={1} />
            {!isMobile &&
              headerLinks.map(({ url, label }: HeaderLink) => (
                <Button
                  key={url}
                  color="inherit"
                  component={GatsbyLink}
                  to={url}
                >
                  {label}
                </Button>
              ))}
            {isMobile && (
              <MobileHeader
                headerLinks={headerLinks}
                theme={theme}
                onToggleTheme={onToggleTheme}
              />
            )}
            {!isMobile && (
              <>
                <Box flex={1} />
                <Button
                  disableElevation
                  color="primary"
                  variant="outlined"
                  component={GatsbyLink}
                  to="/co-construction"
                >
                  Co-créez Archifiltre
                </Button>
                <Button
                  color="inherit"
                  onClick={onToggleTheme}
                  aria-label="Thème clair/sombre"
                >
                  {theme === "light" ? (
                    <Brightness4Icon />
                  ) : (
                    <Brightness7Icon />
                  )}
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      )}
    />
  );
};

export default Header;
