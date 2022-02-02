import { StatisticsGroup } from "../types/statistic-types";

export const statisticsLayout: StatisticsGroup[] = [
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            field: "totalMonthVisitors",
            formatting: "connected_dots",
            label: "",
            type: "simple",
            unit: "utilisations",
          },
        ],
        title: "Nombre d'utilisations par mois",
      },
      {
        size: 4,
        statistics: [
          {
            label: "",
            sublabel:
              "Équivalence en feuilles A4 : <%= carbonFootprintPaperEquivalence %>",
            tooltip:
              'Volume cumulé calculé à partir du volume de fichiers tagués "à supprimer". Données calculées à partir des formules exprimées par le Cyber World CleanUp Day et par monconvertisseurco2.fr',
            type: "interpolate",
            unit: "tonnes d'équivalent CO2 économisées",
            value: "<%= carbonFootprintInKilo %>",
          },
        ],
        title: "Economies de CO2 identifiées",
      },
      {
        size: 4,
        statistics: [
          {
            field: "rating",
            label: "note donnée par un panel de 150 utilisateurs",
            tooltip:
              "En réponse à la question : « Et si vous deviez donner une note à Archifiltre ? »",
            type: "simple",
            unit: "sur 5",
          },
        ],
        title: "Note donnée par les utilisateurs",
      },
    ],
    date: "",
    title: "En résumé 📄",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            field: "averageMonthlyVisitors",
            label: "Nombre moyen à partir des utilisations",
            tooltip: "",
            type: "simple",
            unit: "utilisations par mois",
          },
        ],
        title: "",
      },
      {
        size: 8,
        statistics: [
          {
            field: "totalMonthVisitors",
            formatting: "connected_dots",
            label: "toutes versions confondues",
            type: "simple",
          },
        ],
        title: "Evolution du nombre d'utlisations par mois",
      },
    ],
    date: "depuis 1er janvier 2020",
    title: "Utilisations 🌐",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            fields: ["totalDropVolume"],
            label: "Fichiers bureautiques: tableurs, pdf, multimédia",
            tooltip:
              "Volume de fichiers (cumulé) analysés par dépôt dans Docs par Archifiltre ",
            type: "aggregated",
            unit: "To de fichiers analysés",
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            fields: ["totalMarkedToDelete"],
            label: "de données identifiées « à supprimer »",
            tooltip: `Fichiers identifiés par le tag "à supprimer" dans l'interface Docs par Archifiltre`,
            type: "aggregated",
            unit: "Go de fichiers supprimés",
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            label: "",
            sublabel:
              "Équivalence en feuilles A4 : <%= carbonFootprintPaperEquivalence %>",
            tooltip:
              'Volume cumulé calculé à partir du volume de fichiers tagués "à supprimer". Données calculées à partir des formules exprimées par le Cyber World CleanUp Day et par monconvertisseurco2.fr',
            type: "interpolate",
            unit: "tonnes d'équivalent CO2 économisées",
            value: "<%= carbonFootprintInKilo %>",
          },
        ],
        title: "",
      },
    ],
    date: "depuis le 14 avril 2021",
    title: "Volume de données 🗄️",
  },
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            field: "rating",
            label: "Note donnée par un panel de 150 utilisateurs",
            tooltip:
              "En réponse à la question : « Et si vous deviez donner une note à Docs par Archifiltre ? »",
            type: "simple",
            unit: "sur 5",
          },
        ],
        title: "",
      },
      {
        size: 6,
        statistics: [
          {
            field: "recommendation",
            label:
              "de recommandation par les utilisateurs/utilisatrices à leurs collègues",
            tooltip:
              "Question posée : « A quel point recommanderiez-vous Docs par Archifiltre à des collègues ? » Réponse sur une échelle de 1 à 10.",
            type: "simple",
            unit: "%",
          },
        ],
        title: "",
      },
    ],
    title: "Évaluation ✨",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            fields: ["appDownload", "download"],
            label: "",
            tooltip:
              "Docs par Archifiltre est un exécutable à télécharger sur le site. Le nombre correspond aux téléchargements cumulés (toutes versions confondues).",
            type: "aggregated",
            unit: "téléchargements de Docs par Archifiltre",
          },
        ],
        title: "",
      },
      {
        size: 8,
        statistics: [
          {
            field: "monthlyDownload",
            formatting: "connected_dots",
            label: "Evolution du nombre de téléchargements par mois",
            type: "simple",
          },
        ],
        title: "Evolution du nombre de téléchargements par mois",
      },
    ],
    date: "depuis 1er janvier 2020",
    title: "Téléchargements 🌐",
  },
  {
    blocks: [
      {
        size: 12,
        statistics: [
          {
            field: "visitorCountries",
            formatting: "mapchart",
            label: "depuis le 1er janvier 2020",
            type: "simple",
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            label: "de l'outil",
            type: "raw",
            unit: "présentations",
            value: 102,
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            label: "par une session de présentation",
            type: "raw",
            unit: "personnes touchées",
            value: 2315,
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            label: "nous suivent sur les réseaux sociaux (cumul)",
            type: "raw",
            unit: "personnes",
            value: 777,
          },
        ],
        title: "",
      },
    ],
    date: "depuis le 3 avril 2019",
    title: "Communauté 👩🏾 👨‍🦰 🧓🏿",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            field: "visitsCount",
            label: "sur le site web",
            type: "simple",
            unit: "visiteurs uniques",
          },
        ],
        title: "",
      },
      {
        size: 4,
        statistics: [
          {
            field: "wikiViews",
            label: "en moyenne par mois",
            type: "simple",
            unit: "vues",
          },
        ],
        title: "Wiki",
      },
      {
        size: 4,
        statistics: [
          {
            field: "youtubeViews",
            label: "de nos vidéos (tutoriels, démo produit...)",
            type: "simple",
            unit: "vues",
          },
        ],
        title: "",
      },
    ],
    date: "depuis le 1er janvier 2020",
    title: "Vues sur les autres canaux 👀",
  },
];
