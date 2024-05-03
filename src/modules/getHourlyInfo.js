import getWeatherFromAPI from "./getWeatherFromAPI";

// This function is used to access the API forecast hourly
// It provides a shortcut

const accessToForecastHour = (data, hour) => ({
  state: data.forecast.forecastday[0].hour[hour].condition.text,
  temp: data.forecast.forecastday[0].hour[hour].temp_c,
  rain: data.forecast.forecastday[0].hour[hour].precip_mm
});

const getHourlyInfo = async city => {
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
