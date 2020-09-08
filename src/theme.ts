import { blue, grey } from "@material-ui/core/colors";
import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles";
import deepMerge from "deepmerge";

const darkBlue = {
  contrastText: "#fff",
  dark: "#202a54",
  light: "#576393",
  main: "#2E3D79",
};

const makeTheme = (variant: ThemeOptions): Theme => {
  const type = variant?.palette?.type;
  const common = {
    palette: {
      primary: type === "light" ? darkBlue : blue,
      secondary: grey,
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
