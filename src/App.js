import "./App.scss";
import Navbar from "./Components/navbar.jsx";
import React, { useEffect, useState } from "react";
import CountryView from "./Components/country-view.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetailView from "./Components/country-detail-view";

function App() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [setCountryData]);

  return (
    <Router className="App">
      <Navbar />
      <div className="main-screen">
        <Switch>
          <Route path="/:code">
            <CountryDetailView countryData={countryData} />
          </Route>
          <Route path="/">
            <CountryView countryData={countryData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
