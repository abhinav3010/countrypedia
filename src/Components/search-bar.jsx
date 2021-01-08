import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./styles/search-bar.scss";

function SearchBar(props) {
  return (
    <div className={`search-bar${props.theme === "dark" ? " dark" : ""}`}>
      <div className="search-icon">
        <SearchIcon
          style={{ color: props.theme === "dark" ? "white" : "#a3a3a3" }}
          fontSize="small"
        />
      </div>
      <input
        type="text"
        className={`search-field${props.theme === "dark" ? " dark" : ""}`}
        placeholder="Search for a country..."
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default SearchBar;
