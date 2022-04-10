import * as React from "react";
import "./index.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import data from "../../utils/data.js";
import getIcon from "../../utils/icons.js";

export default function BasicMenu(props) {
  const handleClose = () => {
    props.setMenuFlag(false);
    props.anchorEl.value = "";
  };

  const updateSize = (size, type) => {
    props.setSize(size);
    props.setType(type);
    handleClose();
  };

  return (
    <div>
      <Menu
        anchorEl={props.anchorEl}
        open={props.menuFlag}
        onClose={handleClose}
        elevation={8}
        className="menu-container"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data.menuItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => updateSize(item.size, item.type)}
            >
              {getIcon(item.type, { className: "c-icon" })}
              <span className="menu-text">{item.name}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
