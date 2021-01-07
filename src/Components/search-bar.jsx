import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search-bar.scss";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <SearchIcon style={{ color: "#a3a3a3" }} fontSize="small" />
      </div>
      <input
        type="text"
        className="search-field"
        placeholder="Search for a country..."
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default SearchBar;
