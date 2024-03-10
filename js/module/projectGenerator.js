"use strict";

/**
 * 
 * @param {string} element - target element
 * @param {object} attrebute - attributes of element
 * @param  {...any} childs - any elements and attributes 
 * @returns - wil return components
 * first create parent element.
 * second check if has attributes then set attributes to element
 * last if have another element and atributes we do it again
 */
function projectGenerator(element, attrebute, ...childs) {
    // create element
    const tagName = document.createElement(element);

    // check for have attributes
    if (attrebute) {
        // destructure object and loop on that for get keys and values=> then set attributes to element
        Object.keys(attrebute).forEach(key => tagName.setAttribute(key, attrebute[key]));
    }

    // check for have another elements
    if (childs) {
        // loop on elementss
        childs.forEach(child => {
            // is element a string??
            if (typeof child === 'string') {
                // So append to element but we must change it to node
                tagName.appendChild(document.createTextNode(child))
            } else {
                // if not so append to element
                tagName.appendChild(child)
            }
        })
    }
    return tagName
}

export default projectGenerator;