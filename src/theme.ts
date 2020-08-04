import deepMerge from 'deepmerge'
import { grey } from '@material-ui/core/colors'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles'

const darkBlue = {
  light: '#576393',
  main: '#2E3D79',
  dark: '#202a54',
  contrastText: '#fff',
}

const makeTheme = (variant: ThemeOptions): Theme => {
  const common = {
    palette: {
      primary: darkBlue,
      secondary: grey,
    },
  }

  const theme = createMuiTheme(deepMerge(common, variant))
  return responsiveFontSizes(theme)
}

const light: ThemeOptions = {
  palette: {
    type: 'light',
  },
}

const dark: ThemeOptions = {
  palette: {
    type: 'dark',
  },
}

const themes = {
  light: makeTheme(light),
  dark: makeTheme(dark),
}

export default themes
