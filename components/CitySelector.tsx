import React from "react";
import SmallData from "./SmallData";
import styles from '../styles/Home.module.css';
import { CitySelectorType } from "../types/componentes/citySelector";

const CitySelector = ({ groupedData, setCurrentCity, setCityName }: CitySelectorType) => (
  <div className='container-xxl mt-4'>
    <div className='row g-0 w-100'>
      <h2 className={styles.secondary_title}>Otras ciudades</h2>
      <div className='row g-0 d-flex justify-content-between'>
        <SmallData
          setCurrentCity={setCurrentCity}
          setCityName={setCityName}
          className='col-5 col-md-2 mb-md-2 m-2 m-md-0 selector'
          city='elcairo'
          cityData={groupedData.elcairo}
          cityName={groupedData.elcairoName}
          key={groupedData.elcairo.lat}
          name='El Cairo'
          temp={`${groupedData.elcairo.daily[0].temp.day.toFixed(0)}°`}
          icon={groupedData.elcairo.daily[0].weather[0].icon}
        />
        <SmallData
          setCurrentCity={setCurrentCity}
          setCityName={setCityName}
          className='col-5 col-md-2 mb-md-2 m-2 m-md-0 selector'
          city='londres'
          cityData={groupedData.londres}
          cityName={groupedData.londresName}
          key={groupedData.londres.lat}
          name='Londres'
          temp={`${groupedData.londres.daily[0].temp.day.toFixed(0)}°`}
          icon={groupedData.londres.daily[0].weather[0].icon}
        />
        <SmallData
          setCurrentCity={setCurrentCity}
          setCityName={setCityName}
          className='col-5 col-md-2 mb-md-2 m-2 m-md-0 selector'
          city='newyork'
          cityData={groupedData.newyork}
          cityName={groupedData.newyorkName}
          key={groupedData.newyork.lat}
          name='New York'
          temp={`${groupedData.newyork.daily[0].temp.day.toFixed(0)}°`}
          icon={groupedData.newyork.daily[0].weather[0].icon}
        />
        <SmallData
          setCurrentCity={setCurrentCity}
          setCityName={setCityName}
          className='col-5 col-md-2 mb-md-2 m-2 m-md-0 selector'
          city='paris'
          cityData={groupedData.paris}
          cityName={groupedData.parisName}
          key={groupedData.paris.lat}
          name='Paris'
          temp={`${groupedData.paris.daily[0].temp.day.toFixed(0)}°`}
          icon={groupedData.paris.daily[0].weather[0].icon}
        />
        <SmallData
          setCurrentCity={setCurrentCity}
          setCityName={setCityName}
          className='col-5 col-md-2 mb-md-2 m-2 m-md-0 selector'
          city='sydney'
          cityData={groupedData.sydney}
          cityName={groupedData.sydneyName}
          key={groupedData.sydney.lat}
          name='Sydney'
          temp={`${groupedData.sydney.daily[0].temp.day.toFixed(0)}°`}
          icon={groupedData.sydney.daily[0].weather[0].icon}
        />
      </div>
    </div>
  </div>
);

export default CitySelector;
