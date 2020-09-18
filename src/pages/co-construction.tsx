import { Button, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { FC } from "react";

import SEO from "../components/seo";
import ThemeImage from "../components/theme-image";
import Layout from "../layout";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    paddingBottom: theme.spacing(3),
  },
  image: {
    width: "100%",
  },
}));

export const query = graphql`
  query {
    openlab: file(relativePath: { eq: "openlab.png" }) {
      childImageSharp {
        fluid(maxWidth: 507, maxHeight: 670) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ambassadeur: file(relativePath: { eq: "ambassadeur.png" }) {
      childImageSharp {
        fluid(maxWidth: 473, maxHeight: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ambassadeurWhite: file(relativePath: { eq: "ambassadeur-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 473, maxHeight: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

type CoConstructionProps = {
  data: any;
};

const CoConstruction: FC<CoConstructionProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Co-construction" />
      <Box p={3} textAlign="center">
        <Typography component="h1" variant="h4" color="textPrimary">
          Co-créez Archifiltre
        </Typography>
      </Box>
      <Box pb={5}>
        Archifiltre est un produit développé en amélioration continue. Les choix
        de développement sont basés sur les retours et besoins formulés par les
        utilisateur·trice·s lors des openlabs ou auprès des ambassadeur·drice·s
        Archifiltre.
      </Box>
      <Box pb={4} textAlign="center">
        <Typography variant="h5">Participez aux openlabs</Typography>
      </Box>
      <Grid container spacing={2} className={classes.grid} alignItems="center">
        <Grid item md={8}>
          <Typography variant="h6">
            <strong>Qu’est-ce qu’un Openlab ?</strong>
          </Typography>
          <p>
            Un Openlab est un <strong>moment d’échanges</strong>, sur le temps
            d’une journée, entre l’équipe projet Archifiltre et les
            utilisateur·trice·s, à propos de l’outil Archifiltre. Durant cette
            journée, des <strong>ateliers de co-construction</strong>
            ont lieu afin de discuter autour des fonctionnalités et de
            l’interface de l’outil, des attentes des utilisateur·trice·s et des
            cas d’usage rencontrés. Quelques exemples d’ateliers :
          </p>
          <ul>
            <li>
              Atelier sur la <strong>réorganisation de l’arborescence</strong> :
              qu’est-ce que le reclassement numérique, comment Archifiltre peut
              nous aider et quels sont les freins
            </li>
            <li>
              Atelier sur le <strong>rapport d’audit</strong> : comment enrichir
              le rapport d’audit actuel ?
            </li>
          </ul>
          <Typography variant="h6">
            <strong>Quand et où ?</strong>
          </Typography>
          <p>
            Les Openlabs se déroulent à Paris et ont lieu tous les trois mois
            environ. Le prochain Openlab aura lieu{" "}
            <strong>fin septembre – début octobre</strong>. La date exacte sera
            communiquée ultérieurement en fonction de l’évolution des conditions
            sanitaires.
          </p>
          <Typography variant="h6">
            <strong>Comment s’inscrire ?</strong>
          </Typography>
          <p>
            Un <strong>mail est envoyé par l’équipe Archifiltre</strong> via les
            listes de diffusions ou sur les réseaux sociaux. Les conditions
            d’inscription sont communiquées dans ces communications. Dès
            réception de ce mail, n’hésitez pas à vous inscrire très rapidement
            car le nombre de places est limité.
          </p>
        </Grid>
        <Grid item md={4} className={classes.image}>
          <Img
            fluid={data.openlab.childImageSharp.fluid}
            alt="Openlab Archifiltre"
          />
        </Grid>
      </Grid>
      <Box p={5} textAlign="center">
        <Typography variant="h5">
          Devenez ambassadeur·drice·s Archifiltre !
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4} className={classes.image}>
          <ThemeImage
            lightThemeImage={data.ambassadeur.childImageSharp.fluid}
            darkThemeImage={data.ambassadeurWhite.childImageSharp.fluid}
            alt="Devenir ambassadeur Archifiltre"
          />
        </Grid>
        <Grid item md={8}>
          <p>
            <em>
              Embarquez pour l’aventure Archifiltre en tant
              qu’ambassadeur·drice…
            </em>
            <em>
              Nous avons besoin de vous afin de former les futurs
              utilisateur·trice·s à notre outil et nous représenter dans nos
              régions de France
            </em>
          </p>
          <p>
            L’équipe Archifiltre est de plus en plus sollicitée par les services
            d’archives pour des formations à l’outil ou tout simplement pour
            répondre à des questions. Ne pouvant (malheureusement) pas répondre
            à toutes les requêtes, nous avons réfléchi à une solution et décidé
            d’inclure encore plus nos utilisateur·trice·s à notre projet ! C’est
            ainsi que le concept <strong>d’ambassadeur·drice</strong> a été créé
            lors de notre <strong>Openlab de mars 2020</strong>.
          </p>
          <Typography variant="h6">
            <strong>Qu’est-ce qu’un ambassadeur·drice Archifiltre ?</strong>
          </Typography>
          <p>
            Un ambassadeur·drice Archifiltre est un utilisateur·trice{" "}
            <strong>expert de notre outil</strong> Archifiltre. Il{" "}
            <strong>représente l’équipe</strong> Archifiltre autour de son
            périmètre géographique. Il conseille, répond aux questions, forme
            les personnes qui le sollicitent. Il fait également{" "}
            <strong>découvrir l’outil à d’autres archivistes</strong> dans sa
            région.
          </p>
          <Typography variant="h6">
            <strong>Comment le devenir ?</strong>
          </Typography>
          <p>
            Tout le monde peut devenir ambassadeur·drice ! Il faut simplement{" "}
            <strong>utiliser l’outil Archifiltre</strong> et{" "}
            <strong>être a minima disponible pour répondre</strong> aux
            sollicitations et questions des utilisateur·trice·s. Un{" "}
            <strong>soutien de votre hiérarchie</strong> semble nécessaire dans
            la mesure où vous êtes sollicités durant votre temps de travail.
            Vous pouvez vous manifester auprès de l’équipe Archifiltre lors des{" "}
            <strong>Openlabs</strong> ou bien par <strong>e-mail</strong>.
          </p>
          <Box p={5} textAlign="center">
            <Button
              target="_blank"
              rel="noopener"
              href="mailto:archifiltre@sg.social.gouv.fr"
              variant="contained"
              color="primary"
              startIcon={<MailIcon />}
            >
              Contacter l’équipe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CoConstruction;
