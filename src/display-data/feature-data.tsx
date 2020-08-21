import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import StorageIcon from "@material-ui/icons/Storage";
import VisibilityIcon from "@material-ui/icons/Visibility";
import WrapTextIcon from "@material-ui/icons/WrapText";
import React from "react";

export const featureData = [
  {
    description:
      "Visualiser vos dossiers et fichiers selon différentes pondérations et modes de classement",
    icon: <VisibilityIcon />,
    title: "En un coup d'oeil",
  },
  {
    description:
      "Auditer les répertoires et espaces serveurs de votre administration",
    icon: <StorageIcon />,
    title: "Compatibilité",
  },
  {
    description:
      "Traiter en masse vos répertoires grâce aux exports Archifiltre (transferts, élimination, réorganisation)",
    icon: <WrapTextIcon />,
    title: "Interopérabilité",
  },
  {
    description:
      "Trouver automatiquement les redondances de vos répertoires à partir du calcul d’empreintes",
    icon: <SearchIcon />,
    title: "Recherche rapide",
  },
  {
    description:
      "Trier, réorganiser et enrichir vos répertoires pour verser dans un SAE (compatible SEDA 2.1)",
    icon: <SortIcon />,
    title: "Versements simplifiés",
  },
];
