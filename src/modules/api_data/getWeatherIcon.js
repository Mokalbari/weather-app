import getWeatherFromAPI from "./getWeatherFromAPI";

// This function gets the weather from the API
// Then process the main info about the user city location

const getWeatherIcon = async () => {
  try {
    const data = await getWeatherFromAPI();
    const iconUrl = data.current.condition.icon;
    const secureIconUrl = `https:${iconUrl}`;
    return secureIconUrl;
  } catch (error) {
    throw new Error("Failed to fetch weather icon:", error);
  }
};

export default getWeatherIcon;
