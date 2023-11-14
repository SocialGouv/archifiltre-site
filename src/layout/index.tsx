import { Container, CssBaseline, Theme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import React, { createContext, FC } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
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
    opacity: 0,
  },
}));

export const ThemeContext = createContext<ThemeMode>("light");

type ThemeMode = "light" | "dark";

const Layout: FC<{ container?: boolean }> = ({
  children,
  container = false,
}) => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const initialThemeValue = prefersDarkMode ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", initialThemeValue);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themes[theme as ThemeMode]}>
      <CssBaseline />
      <div className={classes.root}>
        <Header onToggleTheme={toggleTheme} theme={theme} />
        <ThemeContext.Provider value={theme}>
          {container ? (
            <Container component="main" maxWidth="md" className={classes.main}>
              {children}
            </Container>
          ) : (
            <main className={classes.main}>{children}</main>
          )}
        </ThemeContext.Provider>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
