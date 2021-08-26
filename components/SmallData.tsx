import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import { SmallDataType } from "../types/componentes/smallData";

const SmallData = ({ className, city, cityData, cityName, name, temp, icon, setCurrentCity, setCityName }: SmallDataType) => {
  const algo = (data: any, name: any) => {
    setCurrentCity(data);
    setCityName(name);
  };

  return (
    <div className={`${className} border text-center ${styles.card} ${styles[city]}`} onClick={() => algo(cityData, cityName)}>
      <div className={styles.shadow}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temp}>{temp}</div>
        <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='' width={50} height={50} />
      </div>
    </div>
  );
};

export default SmallData;
