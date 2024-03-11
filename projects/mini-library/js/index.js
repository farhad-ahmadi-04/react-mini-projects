'use strict';
import cardGenerator from "./generateCard.js";
import cartItem from "./cardItem.js";
import render from "./render.js";

// varible
const sectionBankCard = cardGenerator('section', { id: "bank-card" })

// event
document.addEventListener('DOMContentLoaded', updateUI);

// function

/**
 * 
 * @returns user accounts from json file
 */
async function data() {
    return await (await fetch('../../../projects/mini-library/js/accounts.json')).json();
}

/**
 * pass user account for handeling
 */
function updateUI() {
    data().then(data => showCard(data, sectionBankCard)).catch(error => console.log(error));
}



/**
 * first with movement add balance of account and thet get render
 * @param {Array} data array of object that have user account
 */
function showCard(data, pos) {
    // loo for create balance with last movement
    for (let item of data) {
        item.balance = String(item.movements.reduce((acc, cur) => acc + cur, 0));
    }
    // loop for get data and destructure for append to sections
    for (const { owner, cardNumber, balance } of data) {
        pos.appendChild(cartItem(owner, cardNumber, balance))
    }
    // getting render
    render(document.querySelector('main'), sectionBankCard)
}

