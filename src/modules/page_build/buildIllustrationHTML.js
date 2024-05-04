import appendToParent from "../dom_utilities/appendToParent";
import createDomElement from "../dom_utilities/createDomElement";
import domReference from "../dom_utilities/domReference";
import outputTheWeatherState from "../dom_utilities/displayImgOnWeather";

const buildIllustrationHTML = async () => {
  const illustrationIMGHTML = await outputTheWeatherState();
  const img = illustrationIMGHTML.link;
  console.log(illustrationIMGHTML);
  const divIllustration = createDomElement("div");
  divIllustration.element.setAttribute("class", "illustration");
  divIllustration.element.innerHTML = `<img src="${img}" alt="">`;

  return divIllustration.element;
};

export const buildIllustrationContainer = async () => {
  const illustrationHTML = await buildIllustrationHTML();
  appendToParent(domReference.content, illustrationHTML);
};

export default buildIllustrationHTML;
