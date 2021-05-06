import { Theme } from "@material-ui/core/styles";
import { PaletteColor } from "@material-ui/core/styles/createPalette";
import Tooltip from "@material-ui/core/Tooltip";
import { useTheme } from "@material-ui/styles";
import React, { FC, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { MapChartStatisticConfig } from "../../types/statistic-types";
import { getColorGradient } from "../../utils/color-util";

const DEFAULT_COLOR = "#D6D6DA";

const geoUrl = "/map/world.json";

const findCountryValue = (
  countries: Record<string, number>,
  countryCode: string
): number | undefined => countries[countryCode.toLowerCase()];

const getCountryColor = (
  countries: Record<string, number>,
  primary: PaletteColor
) => (geo: any): string => {
  const countryCode = geo.properties.ISO_A2.toLowerCase();
  const countryValue = findCountryValue(countries, countryCode);
  const countryColorGetter = getColorGradient(primary);
  const maxValue = Math.max(...Object.values(countries));
  return countryValue
    ? countryColorGetter(countryValue, maxValue)
    : DEFAULT_COLOR;
};

type StatisticMapChartProps = {
  statistic: MapChartStatisticConfig;
};

const StatisticMapChart: FC<StatisticMapChartProps> = ({ statistic }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const {
    palette: { primary },
  } = useTheme<Theme>();
  const countries = statistic.value;
  const colorGetter = getCountryColor(countries, primary);
  return (
    <ComposableMap height={400} projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Tooltip title={tooltipContent} key={geo.rsmKey}>
              <g>
                <Geography
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    const countryValue = findCountryValue(
                      countries,
                      geo.properties.ISO_A2
                    );
                    setTooltipContent(
                      `${NAME} : ${countryValue || 0} utilisation(s)`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: colorGetter(geo),
                      outline: "none",
                    },
                    hover: {
                      fill: primary.main,
                      outline: "none",
                    },
                  }}
                />
              </g>
            </Tooltip>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default StatisticMapChart;
