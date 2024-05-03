import getWeatherIcon from "../api_data/getWeatherIcon";
import config from "../config";

const displayWeatherIcon = async (img, city = config.defaultCity) => {
  const tagImg = img;
  const icon = await getWeatherIcon(city);
  tagImg.src = icon;
};

export default displayWeatherIcon;
