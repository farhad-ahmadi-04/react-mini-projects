'use strict';

const sectionBankCard = cardItem('section', { id: "bank-card" })

function cardItem(ele, att, ...childs) {
    // create element
    const element = document.createElement(ele);

    if (att) {
        Object.keys(att).forEach(key => element.setAttribute(key, att[key]));
    }

    if (childs) {
        childs.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
    }
    return element
}

sectionBankCard.appendChild(cardItem(
    'div', { class: 'card' },
    cardItem('div', { class: 'card-number' },
        cardItem('span', { class: 'material-symbols-outlined' }, 'tag'),
        cardItem('span', null, '6037 9974 8824 4691')),
    cardItem('div', { class: 'card-name' },
        cardItem('span', { class: 'material-symbols-outlined' }, 'person'),
        cardItem('span', null, 'Farhad Ahmadi')),
    cardItem('div', { class: 'card-footer' },
        cardItem('button', null, 'movements'),
        cardItem('span', null, '100,045')),
))

function render(ele1, ele2) {
    ele1.appendChild(ele2)
}

render(document.querySelector('main'), sectionBankCard)
