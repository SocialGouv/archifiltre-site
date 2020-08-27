import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import StorageIcon from "@material-ui/icons/Storage";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";

export const featureData = [
  {
    description:
      "Visualisez vos dossiers et fichiers selon différentes pondérations et modes de classement",
    icon: <VisibilityIcon />,
    title: "En un coup d'oeil",
  },
  {
    description:
      "Traitez en masse vos répertoires grâce aux exports Archifiltre (transferts, élimination, réorganisation)",
    icon: <StorageIcon />,
    title: "En quelques clics",
  },
  {
    description:
      "Trouvez automatiquement les redondances de vos répertoires à partir du calcul d’empreintes",
    icon: <HourglassEmptyIcon />,
    title: "En un instant",
  },
  {
    description:
      "Triez, réorganisez et enrichissez vos répertoires pour verser dans un SAE (compatible SEDA 2.1)",
    icon: <DoubleArrowIcon />,
    title: "Jusqu'au bout",
  },
];
