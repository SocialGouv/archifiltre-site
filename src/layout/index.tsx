import { Container, CssBaseline, Theme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import React, { FC } from "react";

import CookieConsent from "../components/cookie-consent";
import useLocalStorage from "../hooks/useLocalStorage";
import useSiteMetadata from "../hooks/useSiteMetadata";
import themes from "../theme";
import Footer from "./footer";
import Header from "./header";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    margin: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

type ThemeMode = "light" | "dark";

const Layout: FC<{ container?: boolean }> = ({
  children,
  container = false,
}) => {
  const classes = useStyles();
  const { title } = useSiteMetadata();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const initialThemeValue = prefersDarkMode ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", initialThemeValue);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themes[theme as ThemeMode]}>
      <CssBaseline />
      <CookieConsent />
      <div className={classes.root}>
        <Header siteTitle={title} onToggleTheme={toggleTheme} theme={theme} />
        {container ? (
          <Container component="main" maxWidth="md" className={classes.main}>
            {children}
          </Container>
        ) : (
          <main className={classes.main}>{children}</main>
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
