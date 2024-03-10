"use strict";

/**
 * 
 * @param {Element} elment1 - element for append to
 * @param {*} elment2 - elment for setting in first element
 * elment2 will set in element1
 */
function render(elment1, elment2) {
    elment1.appendChild(elment2);
}
export default render;