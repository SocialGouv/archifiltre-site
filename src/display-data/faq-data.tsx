import { Link } from "@material-ui/core";
import React from "react";

export const faqData = [
  {
    answer: (
      <span>
        Vous pouvez installer Archifiltre en cliquant sur le lien de la page
        d&rsquo;accueil. <strong>Pas besoin d&rsquo;installation</strong>, un
        double clic sur l&rsquo;exécutable ouvrira Archifiltre. Des versions web
        sont disponibles (jusqu&rsquo;à la version 1.8) mais ne sont plus
        maintenues à jour.
      </span>
    ),
    question: "Comment installer Archifiltre ?",
  },
  {
    answer: (
      <span>
        <p>
          Voici la configuration recommandée pour faire fonctionner Archifiltre
          correctement :
        </p>
        <ul>
          <li>
            Système d‘exploitation <strong>Windows 64 bits</strong>,{" "}
            <strong>Windows 32 bits</strong>, <strong>Linux</strong> ou{" "}
            <strong>MacOS</strong>
          </li>
          <li>
            <strong>8Go</strong> de RAM
          </li>
          <li>Pas de limite de mémoire de processus</li>
        </ul>
        Depuis la version 1.9, Archifiltre est une{" "}
        <strong>application locale</strong>. Téléchargez simplement l’exécutable
        et double-cliquez dessus, inutile de l’installer !
      </span>
    ),
    question:
      "Quelles sont les caractéristiques minimales pour faire fonctionner Archifiltre ?",
  },
  {
    answer: (
      <span>
        <strong>Non</strong>, tout fonctionne sans création de compte.
      </span>
    ),
    question:
      "Est-ce que j'ai besoin de me créer un compte pour utiliser Archifiltre ?",
  },
  {
    answer: (
      <span>
        <strong>
          Archifiltre n&rsquo;exploite pas les données personnelles des
          utilisateur·trice·s
        </strong>
        . Cependant, nous utilisons{" "}
        <Link href="https://fr.matomo.org/" target="_blank" color="primary">
          Matomo
        </Link>
        , un outil open-source pour avoir des statistiques d&#39;utilisation sur
        notre outil. Lorsque vous utilisez Archifiltre, voici les informations
        auxquelles nous avons accès :
        <ul>
          <li>
            Lors du dépôt de fichiers :
            <ul>
              <li>
                le <strong>nombre de fichiers déposés</strong>
              </li>
              <li>
                leur <strong>répartition par extension</strong>
              </li>
              <li>
                le <strong>temps total du chargement</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Export en CSV</strong> (mais pas son contenu): si vous en
            avez réalisé 1 ou plusieurs
          </li>
          <li>
            <strong>Export en RESIP</strong> (mais pas son contenu): idem
          </li>
          <li>
            <strong>Export en METS</strong> (mais pas son contenu): idem
          </li>
          <li>
            <strong>Export d&#39;un rapport d&#39;audit</strong> (mais pas son
            contenu): idem
          </li>
          <li>
            Ajout d&#39;une <strong>description</strong> à un élément (mais pas
            le texte lui-même)
          </li>
          <li>
            Ajout d&#39;un <strong>tag</strong> à un élément: nombre de tags
            créés mais pas les tags eux-mêmes
          </li>
          <li>
            Changement entre <strong>vue par nombre et par volume</strong>: si
            vous avez utilisé les différentes vues
          </li>
          <li>
            Changement entre <strong>vue par type et par date</strong>
          </li>
          <li>
            Double-clic sur un élément pour <strong>zoomer</strong> dessus: le
            nombre de clics
          </li>
        </ul>
      </span>
    ),
    question:
      "Est-ce que les données des serveurs que je veux analyser seront protégées ?",
  },
  {
    answer: (
      <span>
        Oui, <strong>Archifiltre peut être utilisé par tout le monde</strong>.{" "}
        <strong>
          Certaines fonctionnalités ont été conçues spécialement pour les
          archivistes
        </strong>
        , mais le logiciel peut être utilisé par tout le monde pour visualiser
        des arborescences de fichiers, auditer, et enrichir leurs métadonnées.
      </span>
    ),
    question:
      "Je ne suis pas archiviste, est-ce que je peux utiliser Archifiltre ?",
  },
  {
    answer: (
      <span>
        Archifiltre prend en compte{" "}
        <strong>toutes les extensions de fichiers</strong> et exclut juste les
        fichiers cachés et système de l&#39;analyse. De plus, la plupart des{" "}
        <strong>extensions</strong> de fichiers auront un{" "}
        <strong>code couleur</strong> dans l&#39;arborescence, mais celles qui
        ne peuvent pas être catégorisées seront affichées en gris.
      </span>
    ),
    question: "Quels types de fichiers peuvent être analysés ?",
  },
  {
    answer: (
      <span>
        Pour déterminer que deux éléments sont identiques, nous utilisons une
        fonction de hachage reposant sur{" "}
        <strong>
          l&#39;
          <Link
            href="https://fr.wikipedia.org/wiki/MD5"
            target="_blank"
            color="primary"
          >
            algorithme MD5
          </Link>
        </strong>
        . Cette méthode est appliquée sur tous les fichiers à partir leur
        contenu mais pas de leurs métadonnées (nom du fichier par exemple).
        Ainsi, même si deux fichiers ont le même contenu mais pas le même nom,
        il seront détectés comme des redondances. Pour les dossiers, nous
        juxtaposons les hashs MD5 de leurs enfants et en calculons un nouveau
        hash.
      </span>
    ),
    question: "Comment Archifiltre détecte-t-il les doublons ?",
  },
  {
    answer: (
      <span>
        <strong>
          Nous vous conseillons d&#39;utiliser la dernière version
          d&#39;Achifiltre
        </strong>
        , mais il est possible de télécharger et d&#39;utiliser les anciennes
        versions.
      </span>
    ),
    question: "Est-ce que je dois mettre à jour régulièrement Archifiltre ?",
  },
  {
    answer: (
      <span>
        Pour accéder à vos logs locaux, cherchez le fichier{" "}
        <strong>&quot;archifiltre-logs-[date-des-logs]&quot;</strong>. Il se
        trouve :
        <ul>
          <li>
            Sur <strong>Windows</strong> : C:\Users\[utilisateur]
            \AppData\Roaming\archifiltre
          </li>
          <li>
            Sur <strong>Mac</strong> : /Users/[utilisateur]/Library/Application
            Support/archifiltre
          </li>
          <li>
            Sur <strong>Linux</strong> : /home/.config/archifiltre
          </li>
        </ul>
      </span>
    ),
    question: "Comment récupérer mes logs d'utilisation ?",
  },
  {
    answer: (
      <span>
        <p>Archifiltre est développé avec les technologies suivantes :</p>
        <ul>
          <li>
            <strong>Javascript</strong> et <strong>Typescript</strong> pour les
            langages de programmation
          </li>
          <li>
            <strong>HTML</strong> et <strong>CSS</strong> pour l&#39;interface
            utilisateur
          </li>
          <li>
            <strong>Electron</strong> pour créer un exécutable avec du code
            Javascript
          </li>
          <li>
            <strong>Material UI</strong> pour les composants graphiques
          </li>
          <li>
            <strong>React</strong> et <strong>Redux</strong> pour la gestion des
            données et leur affichage
          </li>
        </ul>
        <p>
          Pour le détail de toutes les technologies utilisées, vous pouvez
          consulter notre code, open-source sur{" "}
          <Link
            href="https://github.com/SocialGouv/archifiltre"
            target="_blank"
            color="primary"
          >
            GitHub
          </Link>
        </p>
      </span>
    ),
    question:
      "Avec quels langages et technologies Archifiltre est-il développé ?",
  },
  {
    answer: (
      <span>
        <p>
          Pour suggérer des améliorations, vous pouvez laisser une{" "}
          <strong>
            issue sur{" "}
            <Link
              href="https://github.com/SocialGouv/archifiltre/issues"
              target="_blank"
              color="primary"
            >
              GitHub
            </Link>
          </strong>
          , suggérer du code via une{" "}
          <strong>
            <Link
              href="https://github.com/SocialGouv/archifiltre/pulls"
              target="_blank"
              color="primary"
            >
              pull request
            </Link>
          </strong>{" "}
          ou nous{" "}
          <strong>
            contacter par{" "}
            <Link
              href="mailto:archifiltre@sg.social.gouv.fr"
              target="_blank"
              color="primary"
            >
              mail
            </Link>
          </strong>
          .
        </p>
      </span>
    ),
    question: "Qui contacter si j'ai des suggestions d'amélioration ?",
  },
];
