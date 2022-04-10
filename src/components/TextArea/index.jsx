import React from "react";
import "./index.css";
import Menu from "../Menu";
import Input from "../Input";

export default function TextArea(props) {
  const [menuFlag, setMenuFlag] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [size, setSize] = React.useState(props.size);

  function handleChange(e) {
    if (e.currentTarget.textContent.trim() === "/") {
      setMenuFlag(!menuFlag);
      setAnchorEl(e.currentTarget);
    } else {
      props.onChange(e);
    }
  }

  return (
    <>
      <Input
        type="text"
        placeholder={props.compId === 1 ? "Press '/'" : ""}
        value={props.content}
        compId={props.compId}
        onKeyPress={props.onKeyPress}
        onKeyDown={props.onKeyDown}
        customType={props.type}
        onChange={(e) => handleChange(e)}
        style={{ fontSize: size }}
      />
      <Menu
        menuFlag={menuFlag}
        setSize={setSize}
        setType={props.onChangeType}
        setMenuFlag={setMenuFlag}
        anchorEl={anchorEl}
      />
    </>
  );
}
