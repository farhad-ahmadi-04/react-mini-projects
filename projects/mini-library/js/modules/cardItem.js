"use strict";
import projectGenerator from "../../../../js/module/projectGenerator.js";

/**
 * sent structure of elemet and retyrn it
 * @param {string} own - owner of account
 * @param {string} cardN - card number of account
 * @param {string} balance - balance of account
 * @returns element
 */
export default function cartItem(own, cardN, balance, pin) {
    // append to section by crad genrator function
    return projectGenerator(
        'div', { class: 'card' },
        projectGenerator('div', { class: 'card-number' },
            projectGenerator('span', { class: 'material-symbols-outlined' }, 'tag'),
            projectGenerator('span', null, cardN)),
        projectGenerator('div', { class: 'card-name' },
            projectGenerator('span', { class: 'material-symbols-outlined' }, 'person'),
            projectGenerator('span', null, own)),
        projectGenerator('div', { class: 'card-footer' },
            projectGenerator('button', { data_id: pin }, 'movements'),
            projectGenerator('span', null, balance)),
    )
}