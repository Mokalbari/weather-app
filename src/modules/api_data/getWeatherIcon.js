import getWeatherFromAPI from "./getWeatherFromAPI";
import config from "../config";

// This function gets the weather from the API
// Then process the main info about the user city location

const getWeatherIcon = async (city = config.defaultCity) => {
  try {
    const data = await getWeatherFromAPI(city);
    const iconUrl = data.current.condition.icon;
    const secureIconUrl = `https:${iconUrl}`;
    return secureIconUrl;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
};

export default getWeatherIcon;
