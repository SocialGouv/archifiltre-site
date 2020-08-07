import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility'
import StorageIcon from '@material-ui/icons/Storage'
import WrapTextIcon from '@material-ui/icons/WrapText'
import SearchIcon from '@material-ui/icons/Search'
import SortIcon from '@material-ui/icons/Sort'

export const featureData = [
  {
    title: "En un coup d'oeil",
    description:
      'Visualiser vos dossiers et fichiers selon différentes pondérations et modes de classement',
    icon: <VisibilityIcon />,
  },
  {
    title: 'Compatibilité',
    description:
      'Auditer les répertoires et espaces serveurs de votre administration',
    icon: <StorageIcon />,
  },
  {
    title: 'Interopérabilité',
    description:
      'Traiter en masse vos répertoires grâce aux exports Archifiltre (transferts, élimination, réorganisation)',
    icon: <WrapTextIcon />,
  },
  {
    title: 'Recherche rapide',
    description:
      'Trouver automatiquement les redondances de vos répertoires à partir du calcul d’empreintes',
    icon: <SearchIcon />,
  },
  {
    title: 'Versements simplifiés',
    description:
      'Trier, réorganiser et enrichir vos répertoires pour verser dans un SAE (compatible SEDA 2.1)',
    icon: <SortIcon />,
  },
]
