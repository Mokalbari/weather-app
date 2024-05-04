import buildIllustrationHTML from "./buildIllustrationHTML";
import appendToParent from "../dom_utilities/appendToParent";
import domReference from "../dom_utilities/domReference";

const buildIllustrationContainer = () => {
  const illustrationHTML = buildIllustrationHTML();
  appendToParent(domReference.content, illustrationHTML);
};

export default buildIllustrationContainer;
