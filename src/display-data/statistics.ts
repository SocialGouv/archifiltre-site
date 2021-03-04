import { StatisticConfig, StatisticsGroup } from "../types/statistic-types";

export const statisticsLayout: StatisticsGroup[] = [
  {
    blocks: [
      {
        size: 3,
        statistics: [
          {
            label: "utilisateurs",
            type: "raw",
            value: 1420,
          },
        ],
        title: "Utilisateur•rice•s",
      },
      {
        size: 3,
        statistics: [
          {
            fields: ["download", "appDownload"],
            label: "téléchargements depuis la création",
            type: "aggregated",
          },
        ],
        title: "Téléchargements",
      },
      {
        size: 3,
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
        size: 3,
        statistics: [
          {
            label:
              "des utilisateurs le recommanderaient à leurs collègues (NPS)",
            tooltip:
              "Question posée : « A quel point recommanderiez-vous Archifiltre à des collègues ? » Réponse sur une échelle de 1 à 10. (49 répondants)",
            type: "raw",
            value: "60%",
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
            label: "personnes",
            type: "raw",
            value: 1420,
          },
          {
            label: "active",
            type: "raw",
            value: 1190,
          },
        ],
        title: "En chiffres",
      },
      {
        size: 6,
        statistics: [
          {
            label: "",
            type: "raw",
            value: "",
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
            label: "téléchargements depuis avril 2019",
            type: "raw",
            value: 15200,
          },
          {
            label: "téléchargements de la dernière version (3.1.1)",
            type: "raw",
            value: 438,
          },
        ],
        title: "En nombre",
      },
      {
        size: 3,
        statistics: [],
        title: "Versions",
      },
      {
        size: 3,
        statistics: [],
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
            value: 13890,
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
            value: 13890,
          },
        ],
        title: "Gain de stockage",
      },
      {
        size: 4,
        statistics: [],
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
            label: "sessions par semaine en moyenne",
            type: "raw",
            value: 3.2,
          },
        ],
        title: "Fréquence",
      },
      {
        size: 3,
        statistics: [
          {
            label: "minutes par session en moyenne",
            type: "raw",
            value: 40,
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
            value: 32,
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
            value: 2789,
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
  {
    blocks: [
      {
        size: 4,
        statistics: [
          {
            label: "personnes ont contribué à la conception du produit",
            type: "raw",
            value: 67,
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
            value: 128,
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
            value: 1278,
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
            value: 34,
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
            value: 324,
          },
        ],
        title: "Personnes touchées",
      },
    ],
    title: "Communauté 👩🏾 👨‍🦰 🧓🏿",
  },
];

export const statisticsConfig: StatisticConfig[] = [
  {
    fields: ["download", "appDownload"],
    label: "Téléchargements d'Archifiltre",
    type: "aggregated",
  },
  {
    fields: ["CSV Export", "CSV with hashes Export", "Tree CSV Export"],
    label: "Exports CSV (avec empreinte...)",
    type: "aggregated",
  },
  {
    field: "Excel Export",
    label: "Exports Excel (depuis le 26/10/2020)",
    type: "simple",
  },
  {
    fields: ["METS Export", "RESIP Export"],
    label: "Exports METS/RESIP (pour transfert vers SAE)",
    type: "aggregated",
  },
  {
    field: "FileTreeDrop",
    label: "Analyses effectuées",
    type: "simple",
  },
  {
    field: "Audit report export",
    label: "Rapports d'audit générés",
    type: "simple",
  },
  {
    field: "youtubeViews",
    label: "Vues sur la chaîne Youtube",
    type: "simple",
  },
  {
    field: "visitsCount",
    label: "Visites sur le site",
    type: "simple",
  },
  {
    field: "wikiViews",
    label: "Vues sur le Wiki Archifiltre (14 derniers jours)",
    type: "simple",
  },
];
