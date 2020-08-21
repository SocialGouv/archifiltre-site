import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import BusinessIcon from "@material-ui/icons/Business";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EuroIcon from "@material-ui/icons/Euro";
import ForumIcon from "@material-ui/icons/Forum";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PublicIcon from "@material-ui/icons/Public";
import SyncIcon from "@material-ui/icons/Sync";
import VideocamIcon from "@material-ui/icons/Videocam";
import WorkIcon from "@material-ui/icons/Work";
import React, { ReactNode } from "react";

export type TimelineElement = {
  title: string;
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
      "Début de la candidature du projet Entrepreneur.e d’intérêt général (EIG)",
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
    date: "01/2018-11/2018",
    icon: <BusinessIcon />,
    isMajor: true,
    title: "Lancement du projet EIG",
  },
  {
    date: "08/2018",
    icon: <MenuBookIcon />,
    title: "Article sur l’outil Archifiltre dans Archivistes !",
  },
  {
    date: "11/2018",
    icon: <SyncIcon />,
    link:
      "https://www.programmevitam.fr/ressources/Newsletter/2019_Newsletter%20Vitam_n10_janvier_2019.pdf",
    title: "Premier entrée dans Adamant d’un versement traité dans Archifiltre",
  },
  {
    date: "03/2019",
    icon: <AccountBalanceIcon />,
    isMajor: true,
    title: "Archifiltre devient une start-up d’Etat",
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
    title: "Intégration à l‘incubateur des ministère sociaux",
  },
  {
    date: "04/2019",
    icon: <ForumIcon />,
    link:
      "https://forum.archivistes.org/wp-content/uploads/sites/13/2019/03/guide-150319-v3.pdf",
    title:
      "Présentation au forum de l’AAF « archives et transparence, une ambition citoyenne »",
  },
  {
    date: "09/2019",
    icon: <MenuBookIcon />,
    title: "Article Archifiltre dans ICA",
  },
  {
    date: "11/2019",
    icon: <BrushIcon />,
    isMajor: true,
    title: "1er openlab",
  },
  {
    date: "02/2020",
    icon: <PublicIcon />,
    title:
      "Début du tour de France avec la présentation aux Archives départementales de la Réunion",
  },
  {
    date: "03/2020",
    icon: <BrushIcon />,
    isMajor: true,
    title: "2e openlab",
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
    link:
      "https://www.lemondeinformatique.fr/actualites/lire-vitam-et-archifiltre-entrent-au-sill-referentiel-de-logiciels-libres-de-l-etat-79010.html",
    title: "Article évoquant Archifiltre dans Le monde informatique",
  },
  {
    date: "06/2020",
    icon: <MenuBookIcon />,
    link:
      "https://blog-ica.org/fr/2020/06/13/presentation-darchifiltre-un-outil-libre/",
    title:
      "Présentation d’Archifiltre dans le blog International Council on Archives (ICA)",
  },
  {
    date: "06/2020",
    icon: <EuroIcon />,
    title:
      "Le Service Interministériel des Archives de France (SIAF) soutient financièrement les développements d’Archifiltre",
  },
  {
    date: "06/2020",
    icon: <VideocamIcon />,
    link: "https://youtu.be/-neTFaWZLz8",
    title: "Premier webinaire d’Archifiltre en collaboration avec As@lae",
  },
];
