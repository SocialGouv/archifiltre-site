import React, { FC } from "react";

import { makeStyles } from "@material-ui/styles";
import { Container, Theme, Link, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookIcon from "@material-ui/icons/Book";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import { Link as GatsbyLink } from "gatsby";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link
              href="https://www.fabrique.social.gouv.fr/"
              target="_blank"
              color="inherit"
            >
              Fabrique des ministères sociaux
            </Link>
          </Grid>
          <Grid item>
            <Link
              component={GatsbyLink}
              to="/mentions-legales"
              target="_blank"
              color="inherit"
            >
              Mentions légales
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link
              href="https://twitter.com/archifiltre"
              target="_blank"
              color="inherit"
            >
              <TwitterIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"
              target="_blank"
              color="inherit"
            >
              <BookIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.youtube.com/channel/UClDwrT-Y1NY9WnEiXLMHp6w"
              target="_blank"
              color="inherit"
            >
              <YouTubeIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/SocialGouv/archifiltre"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="mailto:archifiltre@sg.social.gouv.fr"
              target="_blank"
              color="inherit"
            >
              <MailIcon />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>© {new Date().getFullYear()} Archifiltre</Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
