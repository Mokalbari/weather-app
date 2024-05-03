import getWeatherFromAPI from "./getWeatherFromAPI";
import config from "../config";

// This function is used to access the API forecast hourly
// It provides a shortcut to the data location
// Using a for loop to instanciate every 2 hours between 00:00 and 23:59

const accessToForecastHour = (data, hour) => ({
  state: data.forecast.forecastday[0].hour[hour].condition.text,
  temp: data.forecast.forecastday[0].hour[hour].temp_c,
  rain: data.forecast.forecastday[0].hour[hour].precip_mm
});

const getHourlyInfo = async (city = config.defaultCity) => {
  const data = await getWeatherFromAPI(city);
  const hourlyInfo = {};
  for (let h = 0; h < 24; h += 2) {
    hourlyInfo[`weatherState${h}`] = accessToForecastHour(data, h).state;
    hourlyInfo[`weatherTemp${h}`] = accessToForecastHour(data, h).temp;
    hourlyInfo[`weatherRain${h}`] = accessToForecastHour(data, h).rain;
  }
  return hourlyInfo;
};

export default getHourlyInfo;
