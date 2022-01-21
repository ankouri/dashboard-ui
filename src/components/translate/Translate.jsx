import React, { useState } from "react";
import "./translate.css";
import { MenuItem, List, Button } from "@material-ui/core";
import { TranslateTwoTone, ExpandMoreTwoTone } from "@material-ui/icons";
export default function TranslateSelect() {
  const [open, setOpen] = useState(false);
  const [elementSelected, setElementSelected] = useState("English");

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Button
      onClick={handleOpen}
      startIcon={<TranslateTwoTone />}
      endIcon={<ExpandMoreTwoTone />}
    >
      {elementSelected}

      <List
        style={open ? { display: "block" } : { display: "none" }}
        className="selectlanguage"
      >
        <MenuItem
          onClick={() => {
            setElementSelected("English");
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            setElementSelected("French");
          }}
        >
          French
        </MenuItem>
        <MenuItem
          onClick={() => {
            setElementSelected("Arabic");
          }}
        >
          Arabic
        </MenuItem>
      </List>
    </Button>
  );
}
