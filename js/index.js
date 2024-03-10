"use strict";
import data from "../js/module/gettingData.js";

/* <div class="project-item">
    <img src="./images/image04.jfif" alt="">
    <h5 class="title">mini Library</h5>
    <p class="text">mini library</p>
    <a href="" class="project-link">visite</a>
 </div> */
const projects = document.querySelector('#projects')

function prodactItem(image, title, text) {
    // create div
    const prodact = document.createElement('div');
    prodact.classList.add('project-item')

    // create image
    const img = document.createElement('img')
    img.setAttribute('src', image)
    prodact.appendChild(img)

    // create h5
    const pTitle = document.createElement('h5')
    pTitle.classList.add('title')
    pTitle.textContent = title
    prodact.appendChild(pTitle)


    // create paragraph
    const paragraph = document.createElement('p')
    paragraph.classList.add('text')
    paragraph.textContent = text
    prodact.appendChild(paragraph)

    // create link
    const link = document.createElement('a')
    link.href = '#'
    link.classList.add('project-link')
    link.textContent = 'visite'
    prodact.appendChild(link)

    return prodact
}


data().then(data => data.forEach(element => projects.appendChild(prodactItem(element.image, element.title, element.text))))
