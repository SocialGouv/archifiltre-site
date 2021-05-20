import { StatisticsGroup } from "../types/statistic-types";

export const statisticsLayout: StatisticsGroup[] = [
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            fields: ["appDownload", "download"],
            label: "toutes versions confondues depuis le 1er janvier 2020",
            switchDisplayConfig: {
              field: "monthlyDownload",
              formatting: "connected_dots",
              label: "",
              type: "simple",
            },
            type: "aggregated",
          },
        ],
        title: "Téléchargements",
      },
      {
        size: 6,
        statistics: [
          {
            field: "averageMonthlyVisitors",
            label: "au mois depuis le 1er janvier 2020",
            switchDisplayConfig: {
              field: "totalMonthVisitors",
              formatting: "connected_dots",
              label: "utilisateurs",
              type: "simple",
            },
            type: "simple",
          },
        ],
        title: "Utilisations",
      },
    ],
    title: "Usages 🌐",
    type: "primary",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            fields: ["totalDropVolume"],
            label: "Go de données analysées depuis le 14 avril 2021",
            type: "aggregated",
          },
        ],
        title: "Total",
      },
      {
        size: 4,
        statistics: [
          {
            fields: ["totalMarkedToDelete"],
            label:
              "De données identifiées « à supprimer » depuis le 14 avril 2021",
            type: "aggregated",
          },
        ],
        title: "Gain de stockage",
      },
      {
        size: 4,
        statistics: [
          {
            field: "carbonFootprintInGrams",
            label: "g d'équivalent CO2 économisés depuis le 14 avril 2021",
            tooltip:
              "Donnée calculée à partir d'une formule exprimée par Cyber World CleanUp Day",
            type: "simple",
          },
        ],
        title: "Donnée écologique",
      },
    ],
    title: "Volume de données 🗄️",
    type: "primary",
  },
  {
    blocks: [
      {
        size: 12,
        statistics: [
          {
            field: "visitorCountries",
            formatting: "mapchart",
            label: "(depuis le 1er janvier 2020)",
            type: "simple",
          },
        ],
        title: "Localisation",
      },
      {
        size: 4,
        statistics: [
          {
            label: "sessions de présentation du produit",
            type: "raw",
            value: 99,
          },
        ],
        title: "Présentations",
      },
      {
        size: 4,
        statistics: [
          {
            label: "personnes ayant assistées à ces présentations",
            type: "raw",
            value: 1915,
          },
        ],
        title: "Personnes touchées",
      },
      {
        size: 4,
        statistics: [
          {
            label: "personnes nous suivent sur les réseaux sociaux (cumul)",
            type: "raw",
            value: 672,
          },
        ],
        title: "Followers",
      },
    ],
    title: "Communauté 👩🏾 👨‍🦰 🧓🏿",
    type: "primary",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            field: "visitsCount",
            label: "visiteurs uniques",
            type: "simple",
          },
        ],
        title: "Site web",
      },
      {
        size: 4,
        statistics: [
          {
            label: "Vues par mois en moyenne",
            type: "raw",
            value: 340,
          },
        ],
        title: "Wiki",
      },
      {
        size: 4,
        statistics: [
          {
            field: "youtubeViews",
            label: "Vues sur nos vidéos (tutoriels, démo produit...)",
            type: "simple",
          },
        ],
        title: "Youtube",
      },
    ],
    title: "Vues sur les autres canaux 👀",
    type: "primary",
  },
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            label: "note donnée par les utilisateurs/utilisatrices, sur 5",
            tooltip:
              "Question posée : « Et si vous deviez donner une note à Archifiltre ? » (49 répondants)",
            type: "raw",
            value: 4.2,
          },
        ],
        title: "note",
      },
      {
        size: 6,
        statistics: [
          {
            label:
              "De recommandation par les utilisateurs/utilisatrices à leurs collègues depuis le 01/01/2020",
            tooltip:
              "Question posée : « A quel point recommanderiez-vous Archifiltre à des collègues ? » Réponse sur une échelle de 1 à 10. (49 répondants)",
            type: "raw",
            value: "90%",
          },
        ],
        title: "recommandation",
      },
    ],
    title: "Evalutation auprès d'un panel sondé ✨",
    type: "primary",
  },
];
