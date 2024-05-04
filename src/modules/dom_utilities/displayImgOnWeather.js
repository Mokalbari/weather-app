import getCityInfo from "../api_data/getCityInfo";
import illustrationsCollection from "../page_build/illustrationsCollection";

const weather = {
  sunny: ["sunny", "clear"],
  cloud: ["cloud", "overcast", "mist"],
  rain: ["rainy", "rain", "drizzle"],
  thunder: ["thunder"]
};

const outputTheWeatherState = async () => {
  const city = await getCityInfo();
  const isDay = city.isDay;
  const weatherState = city.weatherState.toLowerCase(); // Ensure comparison is case-insensitive
  let link = "default";

  // Helper function to check if the weatherState matches any of the terms in the arrays
  const matchesWeatherCondition = conditions => {
    return conditions.some(condition => weatherState.includes(condition));
  };

  switch (isDay) {
    case 1:
      if (matchesWeatherCondition(weather.sunny)) {
        link = illustrationsCollection.sunny;
      } else if (matchesWeatherCondition(weather.cloud)) {
        link = illustrationsCollection.cloudy;
      } else if (matchesWeatherCondition(weather.rain)) {
        link = illustrationsCollection.rain;
      } else if (matchesWeatherCondition(weather.thunder)) {
        link = illustrationsCollection.storm;
      } else {
        link = illustrationsCollection.default;
      }
      break;
    case 0:
      if (matchesWeatherCondition([...weather.sunny, ...weather.cloud])) {
        link = illustrationsCollection.night;
      } else if (matchesWeatherCondition(weather.rain)) {
        link = illustrationsCollection.nightrain;
      } else if (matchesWeatherCondition(weather.thunder)) {
        link = illustrationsCollection.storm;
      }
      break;
    default:
      link = illustrationsCollection.default;
  }
  return link;
};

export default outputTheWeatherState;
