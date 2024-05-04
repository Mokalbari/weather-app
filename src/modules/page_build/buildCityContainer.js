import appendToParent from "../dom_utilities/appendToParent";
import domReference from "../dom_utilities/domReference";
import buildCityHTML from "./buildCityHTML";

// Wallet function to build the whole layout of ".city" container

const buildCityContainer = async (city, temperature, weatherIcon) => {
  const cityHTML = buildCityHTML(city, temperature, weatherIcon);
  appendToParent(domReference.content, cityHTML);
};

export default buildCityContainer;
