import config from "../config";

// The main function getWeatherFromAPI is split in two:
// One part is retrieving the data from the API
// The over part is turning it into JSON file.

const fetchData = async (city = config.citySelection) => {
  const weatherData = await fetch(
    `https://api.weatherapi.com/v1//forecast.json?key=0c353eabd4564185b10160058242504&q=${city}`
  );
  if (!weatherData.ok) {
    throw new Error(
      "Failed to reach the weather Data. Check the URL / API Key"
    );
  } else {
    return weatherData;
  }
};

const getWeatherFromAPI = async () => {
  const data = await fetchData();
  const weather = await data.json();
  return weather;
};

export default getWeatherFromAPI;
