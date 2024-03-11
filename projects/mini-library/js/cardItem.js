"use strict";
import cardGenerator from "../js/generateCard.js";

/**
 * sent structure of elemet and retyrn it
 * @param {string} own - owner of account
 * @param {string} cardN - card number of account
 * @param {string} balance - balance of account
 * @returns element
 */
export default function cartItem(own, cardN, balance) {
    // append to section by crad genrator function
    return cardGenerator(
        'div', { class: 'card' },
        cardGenerator('div', { class: 'card-number' },
            cardGenerator('span', { class: 'material-symbols-outlined' }, 'tag'),
            cardGenerator('span', null, cardN)),
        cardGenerator('div', { class: 'card-name' },
            cardGenerator('span', { class: 'material-symbols-outlined' }, 'person'),
            cardGenerator('span', null, own)),
        cardGenerator('div', { class: 'card-footer' },
            cardGenerator('button', null, 'movements'),
            cardGenerator('span', null, balance)),
    )
}