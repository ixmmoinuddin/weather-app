import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Loader from "./Components/Loader";
import Warning from "./Components/Warning";
import SiteTitle from "./Components/SiteTitle";
import WeatherDetail from "./Components/WeatherDetail";

import getCoordinatesOfAddress from "./api/forwardGeocoding";
import getAddressOfCoordinates from "./api/reverseGeocoding";
import getWeatherAndForecast from "./api/weatherAndForecast";

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [address, setAddress] = useState("Islamabad");
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState("blank");
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});

  function searchCity(target) {
    setAddress(target);
  }

  function showWarning() {
    setContentState("warning");
  }

  useEffect(() => {
    function makeRequest(position) {
      setContentState("loading");
      getAddressOfCoordinates(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((res) => {
          setLocationInfo({
            city: res.data.results[0].components.city_district,
            country: res.data.results[0].components.country_code,
          });
        })
        .then(() =>
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        )
        .catch((error) => showWarning());
    }

    function catchError(err) {
      alert("ERROR(" + err.code + "): " + err.message);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(makeRequest, catchError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (address === "") return;

    setContentState("loading");
    getCoordinatesOfAddress(address)
      .then((res) => {
        if (
          res.data.results.length === 0 ||
          res.data.results[0].components.city === undefined
        ) {
          showWarning();
          return;
        } else {
          setCoordinates(res.data.results[0].geometry);
          setLocationInfo({
            city: res.data.results[0].components.city,
            country: res.data.results[0].components.country_code,
          });
        }
      })
      .catch((error) => showWarning());
  }, [address]);

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return;

    getWeatherAndForecast(coordinates)
      .then((res) => {
        setWeatherAndForecastInfo(res.data);
        setContentState("WeatherDetail");
      })
      .catch((error) => showWarning());
  }, [coordinates]);

  const Main = {
    blank: () => null,
    loading: () => <Loader />,
    warning: () => <Warning />,
    WeatherDetail: () => (
      <WeatherDetail
        location={locationInfo}
        weatherInfo={weatherAndForecastInfo}
      />
    ),
  };

  return (
    <div className="App">
      <SiteTitle />
      <Search searchCity={searchCity}/>
      {Main[contentState]()}
    </div>
  );
}

export default App;
