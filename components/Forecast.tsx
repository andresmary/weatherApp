import React from 'react';
import Image from 'next/image'
import styles from '../styles/Card.module.css';
import { ForecastType } from "../types/componentes/forecast";

const Forecast = ({ className, day, temp, icon, humidity, preassure }: ForecastType) => {

  return (
    <div className={`${className} border text-center ${styles.card}`}>
      <div className={styles.shadow}>
        <div className={styles.day}>{day}</div>
        <div className={styles.temp}>{temp}</div>
        <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" width={50} height={50} />
        <div className={styles.extra_data}>Humedad: {humidity}%</div>
        <div className={styles.extra_data}>Presión: {preassure}</div>
      </div>
    </div>
  )
};

export default Forecast;
