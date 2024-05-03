const getWeatherFromAPI = async (city = "Toulouse") => {
  const weatherData = await fetch(
    `https://api.weatherapi.com/v1//forecast.json?key=0c353eabd4564185b10160058242504&q=${city}`
  );
  const weatherJSON = await weatherData.json();
  return weatherJSON;
};
export default getWeatherFromAPI;
