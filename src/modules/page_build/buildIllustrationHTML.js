import appendToParent from "../dom_utilities/appendToParent";
import createDomElement from "../dom_utilities/createDomElement";
import domReference from "../dom_utilities/domReference";

const buildIllustrationHTML = async imgSrc => {
  const divIllustration = createDomElement("div");
  divIllustration.element.setAttribute("class", "illustration");
  divIllustration.element.innerHTML = `<img src="${imgSrc.ref}" alt="${imgSrc.description}">`;

  return divIllustration.element;
};

export const buildIllustrationContainer = async imgSrc => {
  const illustrationHTML = await buildIllustrationHTML(imgSrc);
  appendToParent(domReference.content, illustrationHTML);
};

export default buildIllustrationHTML;
