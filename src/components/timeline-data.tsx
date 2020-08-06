import React, { ReactNode } from 'react'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import WorkIcon from '@material-ui/icons/Work'
import BusinessIcon from '@material-ui/icons/Business'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import SyncIcon from '@material-ui/icons/Sync'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import BuildIcon from '@material-ui/icons/Build'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import ForumIcon from '@material-ui/icons/Forum'
import BrushIcon from '@material-ui/icons/Brush'
import PublicIcon from '@material-ui/icons/Public'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import EuroIcon from '@material-ui/icons/Euro'
import VideocamIcon from '@material-ui/icons/Videocam'

export type TimelineElement = {
  title: string
  date: string
  link?: string
  icon?: ReactNode
  isMajor?: boolean
}

export const timelineElements: TimelineElement[] = [
  {
    title:
      'Début de la candidature du projet Entrepreneur.e d’intérêt général (EIG)',
    date: '05/2017',
    icon: <PlayCircleFilledWhiteIcon />,
    isMajor: true,
  },
  {
    title: 'Oraux de présentation du projet Archifiltre',
    date: '07/2017',
    icon: <ChatBubbleIcon />,
  },
  {
    title: 'Entretiens et sélection des EIG',
    date: '10-11/2017',
    icon: <WorkIcon />,
  },
  {
    title: 'Lancement du projet EIG',
    date: '01/2018-11/2018',
    icon: <BusinessIcon />,
    isMajor: true,
  },
  {
    title: 'Article sur l’outil Archifiltre dans Archivistes !',
    date: '08/2018',
    icon: <MenuBookIcon />,
  },
  {
    title: 'Premier entrée dans Adamant d’un versement traité dans Archifiltre',
    date: '11/2018',
    icon: <SyncIcon />,
    link:
      'https://www.programmevitam.fr/ressources/Newsletter/2019_Newsletter%20Vitam_n10_janvier_2019.pdf',
  },
  {
    title: 'Archifiltre devient une start-up d’Etat',
    date: '03/2019',
    icon: <AccountBalanceIcon />,
    isMajor: true,
  },
  {
    title: 'Présentation à la journée du programme Vitam',
    date: '03/2019',
    icon: <BuildIcon />,
  },
  {
    title: 'Intégration à l‘incubateur des ministère sociaux',
    date: '04/2019',
    icon: <EmojiEmotionsIcon />,
    isMajor: true,
  },
  {
    title:
      'Présentation au forum de l’AAF « archives et transparence, une ambition citoyenne »',
    date: '04/2019',
    link:
      'https://forum.archivistes.org/wp-content/uploads/sites/13/2019/03/guide-150319-v3.pdf',
    icon: <ForumIcon />,
  },
  {
    title: 'Article Archifiltre dans ICA',
    date: '09/2019',
    icon: <MenuBookIcon />,
  },
  {
    title: '1er openlab',
    date: '11/2019',
    icon: <BrushIcon />,
    isMajor: true,
  },
  {
    title:
      'Début du tour de France avec la présentation aux Archives départementales de la Réunion',
    date: '02/2020',
    icon: <PublicIcon />,
  },
  {
    title: '2e openlab',
    date: '03/2020',
    icon: <BrushIcon />,
    isMajor: true,
  },
  {
    title:
      'Référencement d’Archifiltre dans le socle interministériel des logiciels libres (SILL)',
    date: '03/2020',
    link: 'https://sill.etalab.gouv.fr/fr/software?id=185',
    icon: <BookmarkIcon />,
  },
  {
    title: 'Article évoquant Archifiltre dans Le monde informatique',
    date: '04/2020',
    link:
      'https://www.lemondeinformatique.fr/actualites/lire-vitam-et-archifiltre-entrent-au-sill-referentiel-de-logiciels-libres-de-l-etat-79010.html',
    icon: <MenuBookIcon />,
  },
  {
    title:
      'Présentation d’Archifiltre dans le blog International Council on Archives (ICA)',
    date: '06/2020',
    link:
      'https://blog-ica.org/fr/2020/06/13/presentation-darchifiltre-un-outil-libre/',
    icon: <MenuBookIcon />,
  },
  {
    title:
      'Le Service Interministériel des Archives de France (SIAF) soutient financièrement les développements d’Archifiltre',
    date: '06/2020',
    icon: <EuroIcon />,
  },
  {
    title: 'Premier webinaire d’Archifiltre en collaboration avec As@lae',
    date: '06/2020',
    link: 'https://youtu.be/-neTFaWZLz8',
    icon: <VideocamIcon />,
  },
]
