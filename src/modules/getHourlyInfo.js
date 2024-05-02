import getWeatherFromAPI from "./getWeatherFromAPI";

const getHourlyInfo = async city => {
  const data = await getWeatherFromAPI(city);
  const accessHourConditionText = h =>
    data.forecast.forecastday["0"].hour[h].condition.text;
  const accessHourTemp = h => data.forecast.forecastday["0"].hour[h].temp_c;
  const accessHourRain = h => data.forecast.forecastday["0"].hour[h].precip_mm;

  return {
    weatherState0: accessHourConditionText("0"),
    weatherState2: accessHourConditionText("2"),
    weatherState4: accessHourConditionText("4"),
    weatherState6: accessHourConditionText("6"),
    weatherState8: accessHourConditionText("8"),
    weatherState10: accessHourConditionText("10"),
    weatherState12: accessHourConditionText("12"),
    weatherState14: accessHourConditionText("14"),
    weatherState16: accessHourConditionText("16"),
    weatherState18: accessHourConditionText("18"),
    weatherState20: accessHourConditionText("20"),
    weatherState22: accessHourConditionText("22"),
    weatherTemp0: accessHourTemp("0"),
    weatherTemp2: accessHourTemp("2"),
    weatherTemp4: accessHourTemp("4"),
    weatherTemp6: accessHourTemp("6"),
    weatherTemp8: accessHourTemp("8"),
    weatherTemp10: accessHourTemp("10"),
    weatherTemp12: accessHourTemp("12"),
    weatherTemp14: accessHourTemp("14"),
    weatherTemp16: accessHourTemp("16"),
    weatherTemp18: accessHourTemp("18"),
    weatherTemp20: accessHourTemp("20"),
    weatherTemp22: accessHourTemp("22"),
    weatherRain0: accessHourRain("0"),
    weatherRain2: accessHourRain("2"),
    weatherRain4: accessHourRain("4"),
    weatherRain6: accessHourRain("6"),
    weatherRain8: accessHourRain("8"),
    weatherRain10: accessHourRain("10"),
    weatherRain12: accessHourRain("12"),
    weatherRain14: accessHourRain("14"),
    weatherRain16: accessHourRain("16"),
    weatherRain18: accessHourRain("18"),
    weatherRain20: accessHourRain("20"),
    weatherRain22: accessHourRain("22")
  };
};

export default getHourlyInfo;
