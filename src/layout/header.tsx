import { AppBar, Button, Link, Toolbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/styles";
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { FC } from "react";

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
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header: FC<HeaderProps> = ({ onToggleTheme, theme }) => {
  const classes = useStyles();

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
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
            <Box flex={1} />
            <Button color="inherit" component={GatsbyLink} to="/">
              Accueil
            </Button>
            <Button color="inherit" component={GatsbyLink} to="/openlab">
              Openlab
            </Button>
            <Button color="inherit" component={GatsbyLink} to="/changelog">
              Nouveautés
            </Button>
            <Button color="inherit" component={GatsbyLink} to="/faq">
              FAQ
            </Button>
            <Button color="inherit" component={GatsbyLink} to="/ambassador">
              Devenir ambassadeur
            </Button>
            <Button color="inherit" component={GatsbyLink} to="/about">
              A propos
            </Button>
            <Box flex={1} />
            <Button color="inherit" onClick={onToggleTheme}>
              {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </Button>
          </Toolbar>
        </AppBar>
      )}
    />
  );
};

export default Header;
