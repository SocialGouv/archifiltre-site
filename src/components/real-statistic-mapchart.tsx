import { Box } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import React, { FC, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const StatisticMapChart: FC = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  return (
    <Tooltip title={tooltipContent}>
      <Box>
        <ComposableMap height={300} projectionConfig={{ scale: 100 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }: any) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(NAME);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#2E3D79",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </Box>
    </Tooltip>
  );
};

export default StatisticMapChart;
