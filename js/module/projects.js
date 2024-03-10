"use strict";

import data from "../module/gettingData.js";
import projectGenerator from "./projectGenerator.js";

// create div for projects card by projectGenerator function
const projects = projectGenerator('div', { id: 'projects' })

/**
 * 
 * @param {string} image - src of image
 * @param {String} title - text of title
 * @param {string} text - text of paragraph
 * @returns - element 
 * this function will create elemets with projectGenerator function
 */
function prodactItem(image, title, text) {

    return projectGenerator(
        'div', { class: "project-item" },
        projectGenerator('img', { src: image }),
        projectGenerator('h5', { class: "title" }, title),
        projectGenerator('p', { class: 'text' }, text),
        projectGenerator('a', { class: 'project-link', href: '#' }, 'visite')
    )
}

/**
 * when page load we then get data and show it
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        data().then(data => data.forEach(element => projects.appendChild(prodactItem(element.image, element.title, element.text))))
    } catch (error) {
        console.log(error);
    }
})

export default projects;