import { Container, Grid, Link, Theme } from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/styles";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "auto",
    padding: theme.spacing(3, 2),
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
