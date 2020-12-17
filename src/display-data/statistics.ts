import { StatisticConfig } from "../types/statistic-types";

export const statisticsConfig: StatisticConfig[] = [
  {
    label: "Téléchargements d'Archifiltre",
    fields: ["download", "appDownload"],
    type: "aggregated",
  },
  {
    label: "Exports CSV (avec empreinte...)",
    fields: ["CSV Export", "CSV with hashes Export", "Tree CSV Export"],
    type: "aggregated",
  },
  {
    label: "Exports Excel (depuis le 26/10/2020)",
    field: "Excel Export",
    type: "simple",
  },
  {
    label: "Exports METS/RESIP (pour transfert vers SAE)",
    fields: ["METS Export", "RESIP Export"],
    type: "aggregated",
  },
  {
    label: "Analyses effectuées",
    field: "FileTreeDrop",
    type: "simple",
  },
  {
    label: "Rapports d'audit générés",
    field: "Audit report export",
    type: "simple",
  },
  {
    label: "Vues sur la chaîne Youtube",
    field: "youtubeViews",
    type: "simple",
  },
  {
    label: "Visites sur le site (depuis le 09/12/2019)",
    field: "visitsCount",
    type: "simple",
  },
  {
    label: "Vues sur le Wiki Archifiltre (14 derniers jours)",
    field: "wikiViews",
    type: "simple",
  },
];
