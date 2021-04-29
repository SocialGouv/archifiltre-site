import { Formatting, StatisticsGroup } from "../types/statistic-types";

export const statisticsLayout: StatisticsGroup[] = [
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            label: "utilisateurs quotidiens",
            switchDisplayConfig: {
              field: "last30DaysVisits",
              formatting: Formatting.CONNECTED_DOTS,
              label: "utilisateurs",
              type: "simple",
            },
            tooltip: "utilisateurs uniques par jour lors des 30 derniers jours",
            type: "raw",
            value: 40,
          },
        ],
        title: "Utilisateur•rice•s",
      },
      {
        size: 6,
        statistics: [
          {
            fields: ["download", "appDownload"],
            label: "téléchargements depuis le 1er janvier 2020",
            type: "aggregated",
          },
        ],
        title: "Téléchargements",
      },
      {
        size: 6,
        statistics: [
          {
            label: "note donnée par les utilisateurs, sur 5",
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
              "des utilisateurs le recommanderaient à leurs collègues (NPS)",
            tooltip:
              "Question posée : « A quel point recommanderiez-vous Archifiltre à des collègues ? » Réponse sur une échelle de 1 à 10. (49 répondants)",
            type: "raw",
            value: "90%",
          },
        ],
        title: "recommandation",
      },
    ],
    title: "En résumé 📌",
  },
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            field: "visitorCountries",
            formatting: Formatting.MAPCHART,
            label: "",
            type: "simple",
          },
        ],
        title: "Localisation",
      },
    ],
    title: "Utilisateur•rice•s 👨🏿‍💻 👩🏼‍💻 👨🏽‍💻",
  },
  {
    blocks: [
      {
        size: 6,
        statistics: [
          {
            fields: ["download", "appDownload"],
            label: "téléchargements depuis le 1er janvier 2020",
            type: "aggregated",
          },
          {
            fields: [
              "v3.1.1 WIN64",
              "v3.1.1 MAC",
              "v3.1.1 Windows 64 bits",
              "v3.1.1 Windows 32 bits",
              "v3.1.1 LINUX",
              "v3.1.1 Linux 64 bits",
              "v3.1.1 MacOS",
              "v3.1.1 Windows MSI 32 bits",
            ],
            label: "téléchargements de la dernière version (3.1.1)",
            type: "aggregated",
          },
        ],
        title: "En nombre",
      },
      {
        size: 3,
        statistics: [
          {
            formatting: Formatting.PIECHARTS,
            label: "",
            type: "raw",
            value: [
              { label: "v2", value: 54 },
              { label: "v3.0.0", value: 185 },
              { label: "v3.1.x", value: 1895 },
            ],
          },
        ],
        title: "Versions utilisées lors du dernier mois",
      },
      {
        size: 3,
        statistics: [
          {
            formatting: Formatting.PIECHARTS,
            label: "",
            type: "raw",
            value: [
              { label: "Windows", value: 16452 },
              { label: "MacOS", value: 1269 },
              { label: "linux", value: 155 },
            ],
          },
        ],
        title: "Système d'exploitation",
      },
    ],
    title: "Téléchargements 🔗",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            label: "Go de données analysées",
            type: "raw",
            value: "En cours...",
          },
        ],
        title: "Total",
      },
      {
        size: 4,
        statistics: [
          {
            label: "Go d'éléments tagués « à supprimer »",
            type: "raw",
            value: "En cours...",
          },
        ],
        title: "Gain de stockage",
      },
      {
        size: 4,
        statistics: [
          {
            label: "",
            type: "raw",
            value: "En cours...",
          },
        ],
        title: "Donnée écologique",
      },
    ],
    title: "Volume de données 📈",
  },
  {
    blocks: [
      {
        size: 3,
        statistics: [
          {
            label: "minutes par session en moyenne",
            type: "raw",
            value: 12,
          },
        ],
        title: "Durée",
      },
      {
        size: 3,
        statistics: [
          {
            label: "actions par session en moyenne",
            type: "raw",
            value: 12.3,
          },
        ],
        title: "Actions",
      },
      {
        size: 3,
        statistics: [
          {
            fields: [
              "CSV Export",
              "CSV with hashes Export",
              "Tree CSV Export",
              "Excel Export",
              "METS Export",
              "RESIP Export",
            ],
            label: "exports au total",
            type: "aggregated",
          },
        ],
        title: "Exports",
      },
    ],
    title: "Usages 💻",
  },
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            label: "personnes ont contribué à la conception du produit",
            type: "raw",
            value: 122,
          },
        ],
        title: "Co-designers",
      },
      {
        size: 4,
        statistics: [
          {
            label: "personnes ont participé à des sessions de formation",
            type: "raw",
            value: 211,
          },
        ],
        title: "Personnes formées",
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
      {
        size: 4,
        statistics: [
          {
            label: "sessions de présentation du produit",
            type: "raw",
            value: 96,
          },
        ],
        title: "Présentations",
      },
      {
        size: 4,
        statistics: [
          {
            label: "personnes ayant assisté à ces présentations",
            type: "raw",
            value: 1792,
          },
        ],
        title: "Personnes touchées",
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
  },
];
