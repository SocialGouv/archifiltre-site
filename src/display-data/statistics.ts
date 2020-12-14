import { StatisticConfig } from "../types/statistic-types";

export const statisticsConfig: StatisticConfig[] = [
  {
    label: "Analyses effectuées",
    field: "FileTreeDrop",
    type: "simple",
  },
  {
    label: "Exports CSV",
    fields: ["CSV Export", "CSV with hashes Export", "Tree CSV Export"],
    type: "aggregated",
  },
  {
    label: "Exports METS/RESIP",
    fields: ["METS Export", "RESIP Export"],
    type: "aggregated",
  },
  {
    label: "Exports Excel",
    field: "Excel Export",
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
    label: "Vues sur le Wiki Archifiltre (14 derniers jours)",
    field: "wikiViews",
    type: "simple",
  },
  {
    label: "Téléchargements d'Archifiltre",
    fields: ["download", "appDownload"],
    type: "aggregated",
  },
  {
    label: "Visites sur le site",
    field: "visitsCount",
    type: "simple",
  },
];
