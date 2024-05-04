import getCityInfo from "../api_data/getCityInfo";
import { convertTemperatureUnit } from "../utils/utils";
import getWeatherIcon from "../api_data/getWeatherIcon";
import appendToParent from "../dom_utilities/appendToParent";
import domReference from "../dom_utilities/domReference";
import buildCityHTML from "./buildCityHTML";

// Wallet function to build the whole layout of ".city" container

const buildCityContainer = async () => {
  const city = await getCityInfo();
  const temperature = convertTemperatureUnit(city);
  const weatherIcon = await getWeatherIcon();
  const cityHTML = buildCityHTML(city, temperature, weatherIcon);
  appendToParent(domReference.content, cityHTML);
};

export default buildCityContainer;
