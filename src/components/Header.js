import React from "react";
import Menu from "@material-ui/core/Menu";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  const [anchorElement, setAnchorElement] = React.useState(null);

  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const appBarTitle = {
    marginLeft: 25
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorElement}
            keepMounted
            open={Boolean(anchorElement)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Best movies</MenuItem>
            <MenuItem onClick={handleClose}>Worst movies</MenuItem>
          </Menu>
          <Typography variant="h6" style={appBarTitle}>
            Search Movie Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
