declare global {
  interface Window {
    _paq: any[];
  }
}

type TrackerAction = {
  type: string;
  title?: string;
  value?: string;
};

const sanitizeTrackerData = (trackerAction: TrackerAction) =>
  Object.values(trackerAction).filter(
    (actionProperty) => actionProperty !== undefined && actionProperty !== null
  );

const addTracker = (trackerAction: TrackerAction): void => {
  if (window._paq) {
    const sanitizedData = sanitizeTrackerData(trackerAction);
    window._paq.push(sanitizedData);
  }
};

export const trackAppDownload = (
  versionNumber: string,
  platform: string
): void => {
  addTracker({
    type: "trackEvent",
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    title: "download",
    value: `v${versionNumber} ${platform}`,
  });
};
