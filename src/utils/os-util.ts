export type Platform = {
  id: OS;
  url: string;
};

export enum OS {
  WIN64,
  WIN32,
  LINUX,
  MAC,
  WEB,
  MSI32,
  MSI64,
}

export const operatingSystems = [
  {
    id: OS.WIN64,
    key: "Win",
    name: "Windows 64 bits",
  },
  {
    id: OS.WIN32,
    key: "Win",
    name: "Windows 32 bits",
  },
  {
    id: OS.LINUX,
    key: "Linux",
    name: "Linux 64 bits",
  },
  {
    id: OS.MAC,
    key: "Mac",
    name: "MacOS",
  },
  {
    id: OS.WEB,
    key: "Online",
    name: "Online",
  },
  {
    id: OS.MSI32,
    key: "Msi32",
    name: "Windows MSI 32 bits",
  },
  {
    id: OS.MSI64,
    key: "Msi64",
    name: "Windows MSI 64 bits",
  },
];

export const defaultOperatingSystem = OS.WIN64;
const defaultOperatingSystemName = operatingSystems[0].name;

export const getOperatingSystem = (): OS => {
  if (typeof window === "undefined") {
    return defaultOperatingSystem;
  }
  return (
    operatingSystems.find(
      (operatingSystem) =>
        window.navigator.appVersion.indexOf(operatingSystem.key) !== -1
    )?.id || defaultOperatingSystem
  );
};

export const getPlatformName = (platform: Platform): string =>
  operatingSystems.find(
    (operatingSystem: { id: OS }) => operatingSystem.id === platform.id
  )?.name || defaultOperatingSystemName;
