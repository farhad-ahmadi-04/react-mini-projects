'use strict';

/**
 * for generate elements 
 * @param {string} ele - element
 * @param {object} att  - attributes
 * @param  {...any} childs - children of element
 * @returns element + attributes
 */
export function cardItem(ele, att, ...childs) {
    // create element
    const element = document.createElement(ele);
    // if element hs attributes so set attributes
    if (att) {
        Object.keys(att).forEach(key => element.setAttribute(key, att[key]));
    }
    // check for child elements
    if (childs) {
        // So loop in child elements
        childs.forEach(child => {
            // is child is string??
            if (typeof child === 'string') {
                // So change it to node and append to element
                element.appendChild(document.createTextNode(child));
            } else {
                // So append child to element
                element.appendChild(child);
            }
        });
    }
    return element
}