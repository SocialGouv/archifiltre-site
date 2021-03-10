import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { FC } from "react";

type ShowMoreButtonProps = {
  showMore: boolean;
  toggleShowMore: () => void;
};

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  showMore,
  toggleShowMore,
}) =>
  !showMore ? (
    <Button onClick={toggleShowMore} endIcon={<ExpandMoreIcon />}>
      Voir plus
    </Button>
  ) : null;

export default ShowMoreButton;
