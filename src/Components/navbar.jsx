import React from "react";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import "./styles/navbar.scss";

function Navbar(props) {
  const changeTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`navbar${props.theme === "dark" ? " dark" : ""}`}>
      <div className="heading-text">Where in the world?</div>
      <div className="dark-mode-switcher" onClick={changeTheme}>
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
