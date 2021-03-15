import { PaletteColor } from "@material-ui/core/styles/createPalette";

export const getColorGradient = (paletteColor: PaletteColor) => (
  value: number,
  maxValue: number
): string => {
  const ratio = value / maxValue;
  if (ratio > 2 / 3) {
    return paletteColor.dark;
  }
  if (ratio > 1 / 3) {
    return paletteColor.main;
  }
  return paletteColor.light;
};
