const getElement = (e) => document.querySelector(e);
const getAll = (e) => document.querySelectorAll(e);

cards.map((card, index) => {
    let cardItem = getElement('.models .card-item').cloneNode(true);

    cardItem.setAttribute('data-key', index);
    cardItem.querySelector('.card-img-top').src = card.img;
    cardItem.querySelector('.card-img-top').alt = card.name;
    cardItem.querySelector('.card-title').innerHTML = card.name;

    if (card.trained) {
        cardItem.querySelector('img').addEventListener('mouseover', () => {
            cardItem.querySelector('.card-img-top').src = card.trained;
        });
        cardItem.querySelector('img').addEventListener('mouseout', () => {
            cardItem.querySelector('.card-img-top').src = card.img;
        });
    }

    getElement('.cards-area ').append(cardItem);
});