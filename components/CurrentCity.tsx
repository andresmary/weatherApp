import React from "react";
import Forecast from "./Forecast";
import styles from '../styles/Home.module.css';
import { CurrentCityType } from "../types/componentes/currentCity";

const CurrentCity = ({ cityName, currentCity }: CurrentCityType) => (
  <div className='container-xxl d-flex pt-4'>
    <div className='row g-0 w-100'>
      <div className='col-12 col-md-5 pb-2 pb-md-0 flex-column'>
        <h1 className={`${styles.main_title} text-center px-2`}>{cityName && cityName[0]?.name}, {cityName && cityName[0]?.country}</h1>
        <Forecast
          key={currentCity?.daily[0].dt}
          className='col-12 col-md-4 mb-2 mx-auto'
          day={new Date(currentCity?.daily[0].dt * 1000).toLocaleDateString("ES", { weekday: "long", day: "numeric" })}
          temp={`${currentCity?.daily[0].temp.day.toFixed(0)}°`}
          icon={currentCity?.daily[0].weather[0].icon}
          humidity={currentCity?.daily[0].humidity}
          preassure={currentCity?.daily[0].pressure}
        />
      </div>
      <div className='d-flex flex-wrap justify-content-between col-12 col-md-7'>
        {currentCity?.daily.slice(1, 6).map((data: any) => (
          <Forecast
            key={data.dt}
            className='col-5 col-md-2 mb-md-2 m-2 m-md-0'
            day={new Date(data.dt * 1000).toLocaleDateString("ES", { weekday: "long", day: "numeric" })}
            temp={`${data.temp.day.toFixed(0)}°`}
            icon={data.weather[0].icon}
            humidity={data.humidity}
            preassure={data.pressure}
          />
        ))}
      </div>
    </div>
  </div>
);

export default CurrentCity;
