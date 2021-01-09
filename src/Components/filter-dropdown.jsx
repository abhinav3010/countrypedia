import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles/filter-dropdown.scss";
import DropdownMenu from "./dropdown-menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";

function FilterDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(props.selectedFilter);
  const { theme } = props;
  const createMenuItem = (text) => {
    return {
      selectedText: text,
      dropdownText: text,
      value: text === "America" ? "Americas" : text,
    };
  };
  const menuItemList = [
    createMenuItem("Africa"),
    createMenuItem("America"),
    createMenuItem("Asia"),
    createMenuItem("Europe"),
    createMenuItem("Oceania"),
  ];
  const renderItemContent = (item) => {
    return <div className="item-content">{item.dropdownText}</div>;
  };
  const changeDropdownState = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const onItemSelect = (item) => {
    setSelectedFilter(item);
    props.onSelectFilter(item);
    setDropdownOpen(false);
  };
  const renderSelectedFilter = () => {
    return selectedFilter.selectedText;
  };
  return (
    <div className="filter-dropdown">
      <div className={`filter-header${theme === "dark" ? " dark" : ""}`}>
        <div className="selected-filter">
          <div className="active-filter">{renderSelectedFilter()}</div>
        </div>
        <div className="dropdown-arrow" onClick={changeDropdownState}>
          {dropdownOpen ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </div>
      </div>
      {dropdownOpen ? (
        <DropdownMenu
          itemList={menuItemList}
          renderItemContent={renderItemContent}
          onSelect={onItemSelect}
          selectedItem={selectedFilter}
          theme={theme}
        />
      ) : null}
    </div>
  );
}

export default FilterDropdown;
