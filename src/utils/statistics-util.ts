export type Statistic = {
  label: string;
  value: number;
};

export const sanitizeStatistics = (statistics: Statistic[]) => {
  const aggregatedStatistics = aggregateStatistics(statistics);
  return translateStatistics(aggregatedStatistics);
};

const translateStatistics = (statistics: Statistic[]) => {
  const labelTranslations: { [initialName: string]: any } = {
    FileTreeDrop: "Analyses effectuées",
    ["CSV Export"]: "Exports CSV",
    ["METS/RESIP Export"]: "Exports METS/RESIP",
    ["Excel Export"]: "Exports Excel",
    ["Audit report export"]: "Rapports d'audit générés",
    youtubeViews: "Vues sur Youtube",
    wikiViews: "Vues sur le wiki",
  };

  return statistics.map((statistic) => ({
    ...statistic,
    label: labelTranslations[statistic.label],
  }));
};

const findElementByLabel = (statistics: Statistic[], label: string) => {
  return statistics.find((statistic) => statistic.label === label);
};

const getCsvExports = (statistics: Statistic[]) => {
  const csvExportEvents =
    findElementByLabel(statistics, "CSV Export")?.value || 0;
  const csvExportWithHashesEvents =
    findElementByLabel(statistics, "CSV with hashes Export")?.value || 0;
  const treeCsvExportEvents =
    findElementByLabel(statistics, "Tree CSV Export")?.value || 0;

  return {
    label: "CSV Export",
    value: csvExportEvents + csvExportWithHashesEvents + treeCsvExportEvents,
  };
};

const getMetsResipExports = (statistics: Statistic[]) => {
  const metsExportEvents =
    findElementByLabel(statistics, "METS Export")?.value || 0;
  const resipExportEvents =
    findElementByLabel(statistics, "RESIP Export")?.value || 0;

  return {
    label: "METS/RESIP Export",
    value: metsExportEvents + resipExportEvents,
  };
};

const getFilteredStatistics = (statistics: Statistic[]) => {
  const excludedLabels = [
    "CSV Export",
    "CSV with hashes Export",
    "Tree CSV Export",
    "METS Export",
    "RESIP Export",
  ];
  return statistics.filter(
    (statistic) => !excludedLabels.includes(statistic.label)
  );
};

const aggregateStatistics = (statistics: Statistic[]) => {
  const csvExport = getCsvExports(statistics);
  const metsResipExport = getMetsResipExports(statistics);
  const filteredStatistics = getFilteredStatistics(statistics);
  return [...filteredStatistics, csvExport, metsResipExport];
};
