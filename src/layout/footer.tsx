import { Button, Container, Grid, Link, Theme } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/styles";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  feedback: {
    padding: theme.spacing(2),
  },
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
              href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"
              target="_blank"
              rel="noopener"
              color="primary"
            >
              Documentation
            </Link>
          </Grid>
          <Grid item>
            <Link component={GatsbyLink} to="/mentions-legales" color="primary">
              Mentions légales
            </Link>
          </Grid>
          <Grid item>
            <Link
              component={GatsbyLink}
              to="/politique-de-confidentialite"
              color="primary"
            >
              Politique de confidentialité
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="mailto:archifiltre@sg.social.gouv.fr"
              target="_blank"
              rel="noopener"
              color="primary"
            >
              Nous contacter
            </Link>
          </Grid>
          <Grid item>
            <Link component={GatsbyLink} to="/statistiques" color="primary">
              Statistiques
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={1}
          className={classes.feedback}
        >
          <Grid item>
            <Button
              color="primary"
              startIcon={<RecordVoiceOverIcon />}
              href="https://form.typeform.com/to/lTwzr0dP"
              target="_blank"
              rel="noopener"
              variant="contained"
            >
              Donnez votre avis
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link
              href="https://twitter.com/archifiltre"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/company/archifiltre/"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.youtube.com/channel/UClDwrT-Y1NY9WnEiXLMHp6w"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Youtube"
            >
              <YouTubeIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/SocialGouv/archifiltre"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>
            © {new Date().getFullYear()} Archifiltre -{" "}
            <Link
              href="https://www.fabrique.social.gouv.fr/"
              target="_blank"
              rel="noopener"
              color="primary"
            >
              Fabrique des ministères sociaux
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
