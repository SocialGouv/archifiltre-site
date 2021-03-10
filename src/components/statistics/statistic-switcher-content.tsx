import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import React, { FC, ReactNode } from "react";
import { useToggle } from "react-use";

type StatisticsSwitcherContentProps = {
  initialContent: ReactNode;
  alternativeContent: ReactNode;
};

const StatisticsSwitcherContent: FC<StatisticsSwitcherContentProps> = ({
  initialContent,
  alternativeContent,
}) => {
  const [isFirstConfigDisplayed, toggleDisplay] = useToggle(true);
  const linkText = isFirstConfigDisplayed
    ? "voir l'évolution"
    : "voir le total à date";

  return (
    <Box>
      <Box>{isFirstConfigDisplayed ? initialContent : alternativeContent}</Box>
      <Box display="flex" justifyContent="center">
        <Button size="small" onClick={toggleDisplay}>
          {linkText}
        </Button>
      </Box>
    </Box>
  );
};

export default StatisticsSwitcherContent;
