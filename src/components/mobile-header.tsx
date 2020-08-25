import { Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as GatsbyLink } from "gatsby";
import React, { FC, useCallback, useState } from "react";

type MobileHaderProps = {
  headerLinks: { url: string; label: string }[];
  onToggleTheme: () => void;
  theme: string;
};

const MobileHeader: FC<MobileHaderProps> = ({
  headerLinks,
  onToggleTheme,
  theme,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <div>
      <Button onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        {headerLinks.map(({ url, label }) => (
          <MenuItem
            key={url}
            onClick={handleClose}
            component={GatsbyLink}
            to={url}
          >
            {label}
          </MenuItem>
        ))}
        <MenuItem
          onClick={handleClose}
          component={GatsbyLink}
          to="/co-construction"
        >
          Co-créer Archifiltre
        </MenuItem>
        <MenuItem onClick={onToggleTheme}>
          <span>Thème</span>
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileHeader;
