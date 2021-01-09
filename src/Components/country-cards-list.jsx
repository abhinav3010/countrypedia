import React from "react";
import "./styles/country-cards-list.scss";
import CountryCard from "./country-card";

function CountryCardList(props) {
  const renderCountryCards = () => {
    return props.countryList.map((country) => {
      return (
        <div className="card-layout" key={country.name}>
          <CountryCard country={country} theme={props.theme} />
        </div>
      );
    });
  };
  return <div className="cards-list">{renderCountryCards()}</div>;
}

export default CountryCardList;
