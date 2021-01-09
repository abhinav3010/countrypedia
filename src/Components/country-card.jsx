import React from "react";
import "./styles/country-card.scss";
import { Link } from "react-router-dom";

function CountryCard(props) {
  const { country } = props;

  const renderDetails = (key, value) => {
    return (
      <div>
        <span className="key">{key}</span>
        <span className="value">{value}</span>
      </div>
    );
  };

  return (
    <Link to={`/${country.alpha3Code}`} style={{ textDecoration: "none" }}>
      <div className={`card${props.theme === "dark" ? " dark" : ""}`}>
        <div className="flag-box">
          <img src={country.flag} alt="" className="flag" />
        </div>
        <div
          className={`country-details${props.theme === "dark" ? " dark" : ""}`}
        >
          <div className="country-name">{props.country.name}</div>
          {renderDetails("Population", country.population)}
          {renderDetails("Region:", country.region)}
          {renderDetails("Capital:", country.capital)}
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
