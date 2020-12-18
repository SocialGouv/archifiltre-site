import { StatisticConfig } from "../types/statistic-types";

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
