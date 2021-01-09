import React from "react";
import "./styles/country-view.scss";
import SearchBar from "./search-bar";
import FilterDropdown from "./filter-dropdown";
import { useState } from "react";
import CountryCardList from "./country-cards-list";

function CountryView(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    selectedText: "Filter by Region",
    dropdownText: "No filter",
    value: null,
  });

  const getSearchResults = (countryData) => {
    return countryData.reduce((acc, country) => {
      if (country.name.toLowerCase().startsWith(searchKeyword.toLowerCase())) {
        if (
          (activeFilter.value !== null &&
            country.region === activeFilter.value) ||
          activeFilter.value === null
        ) {
          return [...acc, country];
        } else {
          return acc;
        }
      }
      return acc;
    }, []);
  };
  const onSearchInputChange = (event) => {
    console.log("Abhinav", event);
    setSearchKeyword(event.target.value);
  };
  return (
    <div className="country-view">
      <div className="action-bar">
        <SearchBar onInputChange={onSearchInputChange} theme={props.theme} />
        <FilterDropdown
          selectedFilter={activeFilter}
          onSelectFilter={(filter) => setActiveFilter(filter)}
          theme={props.theme}
        />
      </div>
      <CountryCardList
        countryList={getSearchResults(props.countryData)}
        theme={props.theme}
      />
    </div>
  );
}

export default CountryView;
