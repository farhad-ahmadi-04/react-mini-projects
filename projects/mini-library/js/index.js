'use strict';
import projectGenerator from "../../../js/module/projectGenerator.js";
import cartItem from "./modules/cardItem.js";
import render from "../../../js/module/render.js";

// varible
const sectionBankCard = projectGenerator('section', { id: 'bank-card' })
const sectionMove = projectGenerator('section', { id: 'UI' })

document.querySelector('main').addEventListener('click', accountUI)

// event
document.addEventListener('DOMContentLoaded', updateUI);

// function

/**
 * 
 * @returns user accounts from json file
 */
async function data() {
    return await (await fetch('./modules/accounts.json')).json();
}

/**
 * pass user account for handeling
 */
function updateUI() {
    data().then(data => showCard(data)).catch(error => console.log(error));
}



/**
 * first with movement add balance of account and thet get render
 * @param {Array} data array of object that have user account
 */
function showCard(data) {
    // loo for create balance with last movement
    for (let item of data) {
        item.balance = String(item.movements.reduce((acc, cur) => acc + cur, 0));
    }
    // loop for get data and destructure for append to sections
    for (const { owner, cardNumber, balance, pin } of data) {
        sectionBankCard.appendChild(cartItem(owner, cardNumber, balance, pin))
    }
    render(document.querySelector('main'), sectionBankCard)
}

/**
 * get data from json file if user click on btn
 * @param {object} e - for get target click
 */
function accountUI(e) {
    // Is user click on button??
    if (e.target.getAttribute('data_id')) {
        // So get data 
        data().then(data => { accounts(data, e.target.getAttribute('data_id')) }).catch(err => { console.log(err) });
    }
}

/**
 * 01: clear UI
 * 02: find target account
 * 03: destructure account
 * 04: get balance
 * 05: generate header by helping from projectGenerator function
 * 06: loop on movements and find deposity and withdraw and then generate items
 * 07: in the last getting render
 * @param {Array} data data from json file
 * @param {...any} target - targaet user click
 */
function accounts(data, target) {
    // claer UI
    sectionMove.innerHTML = ''
    // find target account
    const account = data.find(acc => acc.pin == target)
    // destructure account
    const { owner, movements } = account;
    // get balance
    const balance = String(movements.reduce((acc, cur) => acc + cur, 0));

    // generate header
    const head = projectGenerator(
        'div', { class: 'haed' },
        projectGenerator('p', { class: 'name' }, owner),
        projectGenerator('p', { class: 'balance' }, balance));
    // append to section move
    sectionMove.appendChild(head);

    // loop in movements
    for (const [index, item] of movements.entries()) {
        // if move of user account in greater than 0 so return deposit otherwise return witdraw
        const state = item > 0 ? 'deposit' : 'withdraw'
        // geerate move part
        const move = projectGenerator(
            'div', { class: "movement" },
            projectGenerator('div', { class: 'move-item' },
                projectGenerator('span', { class: String(`account--${state}`) }, state),
                projectGenerator('span', { class: 'balance' }, String(`${item}€ :${index + 1}`))));
        sectionMove.appendChild(move);

    }
    // getting render
    render(document.querySelector('main'), sectionMove)
}

