import getWeatherFromAPI from "./getWeatherFromAPI";

const getHourlyInfo = async city => {
  const data = await getWeatherFromAPI(city);
  const accessHour = hour => data.forecast.forecastday[hour].hour[hour];
  return {
    weatherState00: accessHour("0").condition.text
  };
};

export default getHourlyInfo;
