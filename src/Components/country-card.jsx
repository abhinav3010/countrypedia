import React from "react";
import "./styles/country-card.scss";
import { Link } from "react-router-dom";

function CountryCard(props) {
  return (
    <Link
      to={`/${props.country.alpha3Code}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div className="flag-box">
          <img src={props.country.flag} alt="" className="flag" />
        </div>
        <div className="country-details">
          <div className="country-name">{props.country.name}</div>
          <div>
            <span className="key">Population:</span>
            <span className="value">{props.country.population}</span>
          </div>
          <div>
            <span className="key">Region:</span>
            <span className="value">{props.country.region}</span>
          </div>
          <div>
            <span className="key">Capital:</span>
            <span className="value">{props.country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
