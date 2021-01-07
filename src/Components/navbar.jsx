import React from "react";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading-text">Where in the world?</div>
      <div className="dark-mode-switcher">
        <NightsStayOutlinedIcon
          fontSize="small"
          style={{ height: "21px", width: "17px" }}
        />
        <div className="secondary-text">Dark Mode</div>
      </div>
    </div>
  );
}

export default Navbar;
