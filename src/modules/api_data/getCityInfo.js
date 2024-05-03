import getWeatherFromAPI from "./getWeatherFromAPI";

// This function gets the weather from the API
// Then process the main info about the user city location

const getCityInfo = async (city = "Toulouse") => {
  const data = await getWeatherFromAPI(city);
  return {
    country: data.location.country,
    city: data.location.name,
    localTime: data.location.localtime,
    temperatureC: data.current.temp_c,
    temperatureF: data.current.temp_f,
    isDay: data.current.is_day,
    weatherState: data.current.condition.text,
    rain: data.current.precip_mm,
    humidity: data.current.humidity,
    uv: data.current.uv,
    wind: data.current.gust_kph
  };
};

export default getCityInfo;
