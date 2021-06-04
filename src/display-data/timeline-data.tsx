import BookmarkIcon from "@material-ui/icons/Bookmark";
import BuildIcon from "@material-ui/icons/Build";
import BusinessIcon from "@material-ui/icons/Business";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ForumIcon from "@material-ui/icons/Forum";
import GroupIcon from "@material-ui/icons/Group";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Looks3Icon from "@material-ui/icons/Looks3";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PublicIcon from "@material-ui/icons/Public";
import SyncIcon from "@material-ui/icons/Sync";
import VideocamIcon from "@material-ui/icons/Videocam";
import WorkIcon from "@material-ui/icons/Work";
import React, { ReactNode } from "react";

export type TimelineElement = {
  title: ReactNode;
  date: string;
  link?: string;
  icon?: ReactNode;
  isMajor?: boolean;
};

export const timelineElements: TimelineElement[] = [
  {
    date: "05/2017",
    icon: <PlayCircleFilledWhiteIcon />,
    isMajor: true,
    title:
      "Début de la candidature du projet Entrepreneur·e d’intérêt général (EIG)",
  },
  {
    date: "07/2017",
    icon: <ChatBubbleIcon />,
    title: "Oraux de présentation du projet Archifiltre",
  },
  {
    date: "10-11/2017",
    icon: <WorkIcon />,
    title: "Entretiens et sélection des EIG",
  },
  {
    date: "01/2018",
    icon: <BusinessIcon />,
    title: "Lancement du projet EIG",
  },
  {
    date: "03/2018",
    icon: <LooksOneIcon />,
    isMajor: true,
    title: "Sortie de la première version : Abstract Antilop",
  },
  {
    date: "08/2018",
    icon: <MenuBookIcon />,
    title: (
      <span>
        Article sur l’outil Archifiltre dans{" "}
        <span style={{ fontStyle: "italic" }}>Archivistes</span> !
      </span>
    ),
  },
  {
    date: "11/2018",
    icon: <SyncIcon />,
    link: "https://www.programmevitam.fr/ressources/Newsletter/2019_Newsletter%20Vitam_n10_janvier_2019.pdf",
    title:
      "Première entrée dans Adamant d’un versement traité dans Archifiltre",
  },
  {
    date: "03/2019",
    icon: <BuildIcon />,
    title: "Présentation à la journée du programme Vitam",
  },
  {
    date: "04/2019",
    icon: <EmojiEmotionsIcon />,
    isMajor: true,
    title:
      "Intégration d'Archifiltre en tant que start-up d'Etat à l‘incubateur des ministères sociaux",
  },
  {
    date: "04/2019",
    icon: <ForumIcon />,
    link: "https://forum.archivistes.org/wp-content/uploads/sites/13/2019/03/guide-150319-v3.pdf",
    title:
      "Présentation au forum de l’AAF (Association des archivistes français)",
  },
  {
    date: "09/2019",
    icon: <MenuBookIcon />,
    title:
      "Article Archifiltre dans la revue de l'ICA (International Council on Archives)",
  },
  {
    date: "11/2019",
    icon: <GroupIcon />,
    isMajor: true,
    title: "1er openlab",
  },
  {
    date: "12/2019",
    icon: <LooksTwoIcon />,
    isMajor: true,
    title: "Sortie de la v2 : Nosy Narwhal",
  },
  {
    date: "02/2020",
    icon: <PublicIcon />,
    title:
      "Début du tour de France avec la présentation aux Archives départementales de la Réunion",
  },
  {
    date: "03/2020",
    icon: <GroupIcon />,
    isMajor: true,
    title: "2ème openlab",
  },
  {
    date: "03/2020",
    icon: <BookmarkIcon />,
    link: "https://sill.etalab.gouv.fr/fr/software?id=185",
    title:
      "Référencement d’Archifiltre dans le socle interministériel des logiciels libres (SILL)",
  },
  {
    date: "04/2020",
    icon: <MenuBookIcon />,
    link: "https://www.lemondeinformatique.fr/actualites/lire-vitam-et-archifiltre-entrent-au-sill-referentiel-de-logiciels-libres-de-l-etat-79010.html",
    title: (
      <span>
        Article évoquant Archifiltre dans{" "}
        <span style={{ fontStyle: "italic" }}>Le monde informatique</span>
      </span>
    ),
  },
  {
    date: "06/2020",
    icon: <MenuBookIcon />,
    link: "https://blog-ica.org/fr/2020/06/13/presentation-darchifiltre-un-outil-libre/",
    title: "Présentation d’Archifiltre sur le blog de l'ICA",
  },
  {
    date: "06/2020",
    icon: <LocalLibraryIcon />,
    isMajor: true,
    title:
      "Le Service Interministériel des Archives de France (SIAF) soutient les développements d’Archifiltre",
  },
  {
    date: "06/2020",
    icon: <VideocamIcon />,
    link: "https://youtu.be/-neTFaWZLz8",
    title: "Premier webinaire d’Archifiltre en collaboration avec As@lae",
  },
  {
    date: "07/2020",
    icon: <Looks3Icon />,
    isMajor: true,
    title: "Sortie de la v3 : Poetic Papangue",
  },
];
