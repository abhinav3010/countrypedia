import React from "react";
import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./styles/country-detail-view.scss";
import { Link, withRouter } from "react-router-dom";

const getCombinedString = (arr) => {
  return arr.map((obj) => obj.name).join();
};

const getCountryByCode = (list, code) => {
  return list.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase()
  );
};

function CountryDetailView(props) {
  const { code } = useParams();
  console.log("Abhinav", props);

  if (!props.countryData) {
    return null;
  }

  const country = getCountryByCode(props.countryData, code);

  if (!country) {
    return <div>No Such Country with that code exists! Check the Code</div>;
  }

  const renderProp = (key, value) => {
    return (
      <div className="prop">
        <div className="key">{key}</div>
        <div className="value">{value}</div>
      </div>
    );
  };

  const renderBorderCountryLink = (code) => {
    const borderCountry = getCountryByCode(props.countryData, code);
    return (
      <div className="border-country-link" key={code}>
        <Link to={`/${code}`}>{borderCountry.name}</Link>
      </div>
    );
  };
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="country-detail-view">
      <div className="back-btn-area">
        <div className="back-btn" onClick={goBack}>
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
          <div className="border-countries">
            <div className="key">Border Countries:</div>
            {country.borders.map((code) => renderBorderCountryLink(code))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CountryDetailView);
