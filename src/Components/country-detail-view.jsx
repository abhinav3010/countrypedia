import React from "react";
import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./styles/country-detail-view.scss";

function CountryDetailView(props) {
  const { code } = useParams();
  console.log("Abhinav", code);

  if (!props.countryData) {
    return null;
  }

  const country = props.countryData.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase()
  );

  if (!country) {
    return <div>No Such Country with that code exists! Check the Code</div>;
  }

  const getCombinedString = (arr) => {
    return arr.map((obj) => obj.name).join();
  };

  const renderProp = (key, value) => {
    return (
      <div className="prop">
        <div className="key">{key}</div>
        <div className="value">{value}</div>
      </div>
    );
  };

  return (
    <div className="country-detail-view">
      <div className="back-btn-area">
        <div className="back-btn">
          <KeyboardBackspaceIcon
            fontSize="small"
            style={{ color: "#4d4d4d" }}
          />
          <div className="btn-text">Back</div>
        </div>
      </div>
      <div className="card-details-area">
        <div className="flag-box">
          <img src={country.flag} alt="flag-img" className="flag-img" />
        </div>
        <div className="country-details-box">
          <div className="country-name">{country.name}</div>
          <div className="country-props">
            {renderProp("Native Name:", country.nativeName)}
            {renderProp("Top Level Domain:", country.topLevelDomain.join())}
            {renderProp("Currencies:", getCombinedString(country.currencies))}
            {renderProp("Region:", country.region)}
            {renderProp("Languages:", getCombinedString(country.languages))}
            {renderProp("Sub Region:", country.subregion)}
            {renderProp("Capital:", country.capital)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailView;
