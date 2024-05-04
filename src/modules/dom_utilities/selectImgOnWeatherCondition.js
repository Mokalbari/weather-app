import illustrationsCollection from "../page_build/illustrationsCollection";
import { matchesWeatherCondition } from "../utils/utils";

const weather = {
  sunny: ["sunny", "clear"],
  cloud: ["cloud", "overcast", "mist"],
  rain: ["rainy", "rain", "drizzle"],
  thunder: ["thunder"]
};

const selectDaytimeImage = weatherState => {
  if (matchesWeatherCondition(weatherState, weather.sunny)) {
    return illustrationsCollection.sunny;
  }
  if (matchesWeatherCondition(weatherState, weather.cloud)) {
    return illustrationsCollection.cloudy;
  }
  if (matchesWeatherCondition(weatherState, weather.rain)) {
    return illustrationsCollection.rain;
  }
  if (matchesWeatherCondition(weatherState, weather.thunder)) {
    return illustrationsCollection.storm;
  }
  return illustrationsCollection.default;
};

const selectNighttimeImage = weatherState => {
  if (
    matchesWeatherCondition(weatherState, [...weather.sunny, ...weather.cloud])
  ) {
    return illustrationsCollection.night;
  }
  if (matchesWeatherCondition(weatherState, weather.rain)) {
    return illustrationsCollection.nightrain;
  }
  if (matchesWeatherCondition(weatherState, weather.thunder)) {
    return illustrationsCollection.storm;
  }
  return illustrationsCollection.default;
};

const selectImgOnWeatherCondition = async city => {
  const { isDay } = city;
  const weatherState = city.weatherState.toLowerCase();
  return isDay
    ? selectDaytimeImage(weatherState)
    : selectNighttimeImage(weatherState);
};

export default selectImgOnWeatherCondition;
