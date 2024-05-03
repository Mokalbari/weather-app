import createDomElement from "../dom_utilities/createDomElement";
import getCityInfo from "../api_data/getCityInfo";
import { isUserUnit } from "../utils";
import getWeatherIcon from "../api_data/getWeatherIcon";
import appendToParent from "../dom_utilities/appendToParent";
import domReference from "../dom_utilities/domReference";

const buildCityContainer = async () => {
  const city = await getCityInfo();
  const weatherIcon = await getWeatherIcon();

  let temperature = `${city.temperatureC} °C`;

  if (isUserUnit("C")) {
    temperature = `${city.temperatureC} °C`;
  } else {
    temperature = `${city.temperatureF} °F`;
  }

  const divCity = createDomElement("div");
  divCity.element.setAttribute("class", "city");
  divCity.element.innerHTML = `
    <div class="city__information">
        <h1 class="city__name">${city.city}</h1>
        <h2 class="city__country">${city.country}</h2>
      </div>
      <p class="city__time">${city.localTime}</p>
      <div class="city__form">
        <form action="#" method="post">
          <input type="text" placeholder="Search a city..." />
          <i class="bx bx-search-alt-2 bx-s"></i>
        </form>
      </div>

      <div class="city__informations">
        <p class="city__weatherState">${city.weatherState}</p>
        <p class="city__temperature">${temperature}</p>
        <img class="city__weatherIcon" src="${weatherIcon}" alt="icon for: ${city.weatherState}" />
        <p class="city__humidity">Humidity: ${city.humidity}°</p>
        <p class="city__rain">Rain: ${city.rain}mm</p>
      </div>`;

  appendToParent(domReference.content, divCity.element);
};

export default buildCityContainer;

// const divCity = createDomElement("div").setAttribute("class", "city");
// const divCityInformation = createDomElement("div").setAttribute(
//   "class",
//   "city__information"
// );
// const h1 = createDomElement("h1")
//   .setAttribute("class", "city__name")
//   .addTextContent(city.city);

// const h2 = createDomElement("h2")
//   .setAttribute("class", "city__country")
//   .addTextContent(city.country);

// const pTime = createDomElement("p")
//   .setAttribute("class", "city__time")
//   .addTextContent(city.localTime);
