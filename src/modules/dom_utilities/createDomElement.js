const createDomElement = tag => {
  const element = document.createElement(tag);

  return {
    element,

    setAttribute(attribute, value) {
      element.setAttribute(attribute, value);
    },

    removeAttribute(value) {
      element.removeAttribute(value);
    },

    addTextContent(value) {
      element.textContent = value;
    },

    addInnerHtml(value) {
      element.innerHTML = value;
    }
  };
};

// /**
//  * Creates a DOM element with optional settings for attributes, innerHTML, and event listeners.
//  *
//  * @param {string} elementType - The type of element to create (e.g., 'div', 'span').
//  * @param {object} options - Options to configure the element:
//  *   @param {object} [options.attributes] - Attributes to set on the element.
//  *   @param {string} [options.innerHTML] - HTML content to insert into the element.
//  *   @param {object} [options.events] - Event listeners to attach to the element.
//  * @returns {HTMLElement} The created and configured element.
//  */
// const createDomElement = (elementType, options = {}) => {
//   const element = document.createElement(elementType);

//   if (options.attributes) {
//     for (const [key, value] of Object.entries(options.attributes)) {
//       element.setAttribute(key, value);
//     }
//   }

//   if (options.innerHTML) {
//     element.innerHTML = options.innerHTML;
//   }

//   if (options.events) {
//     for (const [event, handler] of Object.entries(options.events)) {
//       element.addEventListener(event, handler);
//     }
//   }

//   return element;
// };

// export default createDomElement;

export default createDomElement;
