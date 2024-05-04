import config from "../config";

export const isUserUnit = unit => config.units === unit;

export const convertTemperatureUnit = city => {
  let temperature = `${city.temperatureC} °C`;

  if (!isUserUnit("C")) {
    temperature = `${city.temperatureF} °F`;
  }
  return temperature;
};

export const isDay = city => city === true;
