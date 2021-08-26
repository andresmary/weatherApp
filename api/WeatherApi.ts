import Axios from "axios";

const WEATHERAPI_URL = process.env.NEXT_PUBLIC_WEATHERAPI_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getCityName = (lat: number, long: number) =>
  Axios.get(`${WEATHERAPI_URL}geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${API_KEY}`).then((response) => {
    if (!response) {
      return Promise.reject();
    }
    return response.data;
  });

const getForecast = (lat: number, long: number) =>
  Axios.get(`${WEATHERAPI_URL}data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`).then(
    (response) => {
      if (!response) {
        return Promise.reject();
      }
      return response.data;
    }
  );

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCityName,
  getForecast,
};
