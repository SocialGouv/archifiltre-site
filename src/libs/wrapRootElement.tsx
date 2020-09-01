import { CssBaseline, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";

import themes from "../theme";

const wrapRootElement = ({ element }: { element: ReactNode }): ReactNode => {
  function getTheme(): Theme {
    const isServer = typeof window === "undefined";

    let theme: "light" | "dark" = "light";

    if (!isServer) {
      try {
        const json = window.localStorage.getItem("theme");
        const item = json ? JSON.parse(json) : theme;
        if (["light", "dark"].includes(item)) {
          theme = item;
        }
      } catch (error) {
        console.log(error);
      }
    }

    return themes[theme];
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};

export default wrapRootElement;
