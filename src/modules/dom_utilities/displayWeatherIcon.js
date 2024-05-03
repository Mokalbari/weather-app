import getWeatherIcon from "../api_data/getWeatherIcon";

const displayWeatherIcon = async (img, city = "Toulouse") => {
  const targetImg = img;
  const icon = await getWeatherIcon(city);
  targetImg.src = icon;
};

export default displayWeatherIcon;
