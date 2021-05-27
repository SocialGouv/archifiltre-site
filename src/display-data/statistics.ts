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
            unit: "téléchargements",
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
            unit: "utilisations",
          },
        ],
        title: "Utilisations",
      },
    ],
    title: "Usages 🌐",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            fields: ["totalDropVolume"],
            label: "de données analysées depuis le 14 avril 2021",
            type: "aggregated",
            unit: "Go",
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
              "de données identifiées « à supprimer » depuis le 14 avril 2021",
            type: "aggregated",
            unit: "Go",
          },
        ],
        title: "Gain de stockage",
      },
      {
        size: 4,
        statistics: [
          {
            fields: [
              "carbonFootprintInGrams",
              "carbonFootprintPaperEquivalence",
            ],
            label: "économisés depuis le 14 avril 2021",
            sublabel: "équivalence en feuilles A4: ",
            tooltip:
              "Donnée calculée à partir d'une formule exprimée par Cyber World CleanUp Day",
            type: "multiple",
            unit: "g d'équivalent CO2",
          },
        ],
        title: "Donnée écologique",
      },
    ],
    title: "Volume de données 🗄️",
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
            label: "de l'outil depuis le 3 avril 2019",
            type: "raw",
            unit: "présentations",
            value: 101,
          },
        ],
        title: "Présentations",
      },
      {
        size: 4,
        statistics: [
          {
            label: "par une session de présentation depuis le 3 avril 2019",
            type: "raw",
            unit: "personnes touchées",
            value: 1965,
          },
        ],
        title: "Personnes touchées",
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
        title: "Followers",
      },
    ],
    title: "Communauté 👩🏾 👨‍🦰 🧓🏿",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            field: "visitsCount",
            label: "sur le site web depuis le 1 janvier 2020",
            type: "simple",
            unit: "visiteurs uniques",
          },
        ],
        title: "Site web",
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
            label: "de nos vidéos (tutoriels, démo produit...) ",
            type: "simple",
            unit: "vues",
          },
        ],
        title: "Youtube",
      },
    ],
    title: "Vues sur les autres canaux 👀",
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
              "de recommandation par les utilisateurs/utilisatrices à leurs collègues",
            tooltip:
              "Question posée : « A quel point recommanderiez-vous Archifiltre à des collègues ? » Réponse sur une échelle de 1 à 10. (49 répondants)",
            type: "raw",
            unit: "%",
            value: "90",
          },
        ],
        title: "recommandation",
      },
    ],
    title: "Evalutation auprès d'un panel sondé ✨",
  },
];
