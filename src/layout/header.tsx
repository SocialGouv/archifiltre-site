import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  toolbar: {},
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
})

export interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ onToggleTheme, theme }) => {
  const classes = useStyles()

  return (
    <AppBar component="header" position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Link
          to="/"
          component={GatsbyLink}
          color="inherit"
          className={classes.link}
        >
          <img src="images/logo.png" alt="Logo" width="50" />
        </Link>
        <Box flex={1} />
        <Button color="inherit" component={GatsbyLink} to="/">
          Accueil
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
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
