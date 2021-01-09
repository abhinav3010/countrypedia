import "./App.scss";
import Navbar from "./Components/navbar.jsx";
import React, { useEffect, useState } from "react";
import CountryView from "./Components/country-view.jsx";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetailView from "./Components/country-detail-view";

const getThemeFromLocalStorage = () => {
  return localStorage.theme ?? "light";
};

function App() {
  const [countryData, setCountryData] = useState([]);
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  useEffect(() => {
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [setCountryData]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Navbar setTheme={setTheme} theme={theme} />
      <div className={`main-screen${theme === "dark" ? " dark" : ""}`}>
        <Switch>
          <Route path="/:code">
            <CountryDetailView countryData={countryData} theme={theme} />
          </Route>
          <Route path="/">
            <CountryView countryData={countryData} theme={theme} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
