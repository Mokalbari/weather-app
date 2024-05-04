import createDomElement from "../dom_utilities/createDomElement";

const buildCityHTML = (city, temperature, weatherIcon) => {
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

  return divCity.element;
};

export default buildCityHTML;
