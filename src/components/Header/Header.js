import React from "react";
import "./Header.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="heading">
        devjobs
        </div>
        <div className="icon">
          <LightModeIcon style={{ color: "white" }} fontSize="very-small" />
          <ToggleOffIcon style={{ color: "white" }} />
          <DarkModeIcon style={{ color: "white" }} fontSize="very-small" />
        </div>
      </div>
    </div>
  );
};

export default Header;
