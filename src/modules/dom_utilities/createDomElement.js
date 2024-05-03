const createDomElement = (element, attribute, name) => {
  const tag = document.createElement(element);
  if (attribute && name) {
    tag.setAttribute(attribute, name);
  }
  return tag;
};

export default createDomElement;
