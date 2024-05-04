import "./index.scss";
import buildCityContainer from "./modules/page_build/buildCityContainer";
import getCityInfo from "./modules/api_data/getCityInfo";
import { convertTemperatureUnit } from "./modules/utils/utils";
import getWeatherIcon from "./modules/api_data/getWeatherIcon";
import { buildIllustrationContainer } from "./modules/page_build/buildIllustrationHTML";
import selectImgOnWeatherCondition from "./modules/dom_utilities/selectImgOnWeatherCondition";
// import buildCityContainer from "./modules/page_build/buildCityContainer";

// Stocker la donnée validée sous formulaire
// Utiliser la donnée stockée pour fetch météo ville
// Convertir les données au format Json

// This below is an IIFE to get data from the API and display in console
// IIFE is necessary as the promise needs to be resolve before accessing the data
// risk of undefined without the IIFE

// (async () => {
//   const toulouse = await getHourlyInfo("Toulouse");
//   const toulouseBis = await getCityInfo("Bordeaux");
//   console.log(toulouseBis.city);
//   console.log(toulouse.weatherTemp14);
// })();

document.addEventListener("DOMContentLoaded", async () => {
  const city = await getCityInfo();
  const temperature = convertTemperatureUnit(city);
  const weatherIcon = await getWeatherIcon();
  const imgSrc = await selectImgOnWeatherCondition(city);
  buildCityContainer(city, temperature, weatherIcon);
  buildIllustrationContainer(imgSrc);
});
