import React from "react";
import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import HomeIcon from "@material-ui/icons/Home";
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
      <Link
        to={`/${code}`}
        style={{
          color: props.theme === "dark" ? "white" : "black",
        }}
        key={code}
      >
        <div
          className={`border-country-link${
            props.theme === "dark" ? " dark" : ""
          }`}
        >
          {borderCountry.name}
        </div>
      </Link>
    );
  };
  const goBack = () => {
    props.history.goBack();
  };

  const renderButton = (onClick, ImgComponent, buttonText) => {
    return (
      <div
        className={`redirect-btn${props.theme === "dark" ? " dark" : ""}`}
        onClick={onClick}
      >
        <ImgComponent
          fontSize="small"
          style={{ color: props.theme === "dark" ? "white" : "#4d4d4d" }}
        />
        <div className="btn-text">{buttonText}</div>
      </div>
    );
  };

  const renderBorderCountries = () => {
    if (country.borders.length === 0) {
      return null;
    }
    return (
      <div className="border-countries">
        <div className="key">Border Countries:</div>
        {country.borders.map((code) => renderBorderCountryLink(code))}
      </div>
    );
  };

  return (
    <div className="country-detail-view">
      <div className="back-btn-area">
        {renderButton(goBack, KeyboardBackspaceIcon, "Back")}
        <Link
          to="/"
          style={{
            color: props.theme === "dark" ? "white" : "black",
          }}
        >
          {renderButton(null, HomeIcon, "Home")}
        </Link>
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
          {renderBorderCountries()}
        </div>
      </div>
    </div>
  );
}

export default withRouter(CountryDetailView);
