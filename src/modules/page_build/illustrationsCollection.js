import sunnyIMG from "../../img/sunny.png";
import rainIMG from "../../img/rain.png";
import cloudyIMG from "../../img/cloudy.png";
import defaultIMG from "../../img/default.png";
import nightIMG from "../../img/night.png";
import nightRainIMG from "../../img/nightrain.png";
import stormIMG from "../../img/storm.png";

const illustrationsCollection = {
  sunny: {
    link: sunnyIMG,
    description: "A cat playing in the sun"
  },
  rain: {
    link: rainIMG,
    description: "A cat watching the rain"
  },
  storm: {
    link: stormIMG,
    description: "A cat watching the storm"
  },
  cloudy: {
    link: cloudyIMG,
    description: "A cat playing in the clouds"
  },
  default: {
    link: defaultIMG,
    description: "A cat playing in a japanese house"
  },
  night: {
    link: nightIMG,
    description: "A cat sleeping under the stars"
  },
  nightrain: {
    link: nightRainIMG,
    description: "A cat watching the rain at night"
  }
};

export default illustrationsCollection;
