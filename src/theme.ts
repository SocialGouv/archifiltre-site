import { blue, grey } from "@material-ui/core/colors";
import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles";
import deepMerge from "deepmerge";

import OpenSans from "../static/fonts/OpenSans-Regular.ttf";

const openSans = {
  fontDisplay: "swap",
  fontFamily: "OpenSans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('OpenSans'),
    local('OpenSans-Regular'),
    url(${OpenSans}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const darkBlue = {
  contrastText: "#fff",
  dark: "#202a54",
  light: "#576393",
  main: "#2E3D79",
};

const makeTheme = (variant: ThemeOptions): Theme => {
  const type = variant?.palette?.type;
  const common = {
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [openSans],
        },
      },
    },
    palette: {
      primary: type === "light" ? darkBlue : blue,
      secondary: grey,
    },
    typography: {
      fontFamily: "OpenSans, Arial",
    },
  };
  const theme = createMuiTheme(deepMerge(common, variant));
  return responsiveFontSizes(theme);
};

const light: ThemeOptions = {
  palette: {
    background: { default: "rgba(0, 0, 0, 0.04)" },
    type: "light",
  },
};

const dark: ThemeOptions = {
  palette: {
    type: "dark",
  },
};

const themes = {
  dark: makeTheme(dark),
  light: makeTheme(light),
};

export default themes;
