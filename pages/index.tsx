import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";
import CurrentCity from "../components/CurrentCity";
import CitySelector from "../components/CitySelector";
import WeatherApi from "../api/WeatherApi";
import { GroupedDataType } from "../types/componentes/groupedData";

const HomeWheather = ({ groupedData }: GroupedDataType) => {
  const [cityName, setCityName] = useState([]);
  const [currentCity, setCurrentCity] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const geolocatedCityName = await WeatherApi.getCityName(position.coords.latitude, position.coords.longitude);
      setCityName(geolocatedCityName);
      const geolocatedForecast = await WeatherApi.getForecast(position.coords.latitude, position.coords.longitude);
      setCurrentCity(geolocatedForecast);
    });
  }, []);

  return (
    <div className={styles.main}>
      <CurrentCity cityName={cityName} currentCity={currentCity} />
      <CitySelector groupedData={groupedData} setCurrentCity={setCurrentCity} setCityName={setCityName} />
    </div>
  );
};

export async function getServerSideProps() {
  const elcairo = await WeatherApi.getForecast(4.7591, -76.2223);
  const elcairoName = await WeatherApi.getCityName(4.7591, -76.2223);
  const londres = await WeatherApi.getForecast(51.5085, -0.1257);
  const londresName = await WeatherApi.getCityName(51.5085, -0.1257);
  const newyork = await WeatherApi.getForecast(40.7143, -74.006);
  const newyorkName = await WeatherApi.getCityName(40.7143, -74.006);
  const paris = await WeatherApi.getForecast(48.8534, 2.3488);
  const parisName = await WeatherApi.getCityName(48.8534, 2.3488);
  const sydney = await WeatherApi.getForecast(-33.8679, 151.2073);
  const sydneyName = await WeatherApi.getCityName(-33.8679, 151.2073);

  const groupedData = { elcairo, elcairoName, londres, londresName, newyork, newyorkName, paris, parisName, sydney, sydneyName };

  return {
    props: {
      groupedData,
    },
  };
}

export default HomeWheather;
