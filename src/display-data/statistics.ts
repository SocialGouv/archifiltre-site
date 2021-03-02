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
            label: "téléchargements depuis la création",
            type: "raw",
            value: 15200,
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
