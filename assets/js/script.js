const getElement = (e) => document.querySelector(e);
const getAll = (e) => document.querySelectorAll(e);

cards.map((card, index) => {
    let cardItem = getElement('.models .card-item').cloneNode(true);

    cardItem.setAttribute('data-key', index);
    cardItem.querySelector('.card-img-top').src = card.img;
    cardItem.querySelector('.card-img-top').alt = card.name;
    cardItem.querySelector('.card-title').innerHTML = card.name;

    let active = false;

    if (card.trained) {
        cardItem.querySelector('.switch').addEventListener('click', () => {
            active = !active;
            let cardImg = active ? card.trained : card.img;
            cardItem.querySelector('.card-img-top').src = cardImg;
        });
    } else {
        cardItem.querySelector('.switch').style.display = 'none';
    }

    if (card.rarity === 6) {
        cardItem.querySelector('.card-title').style.color = 'darkblue';
        cardItem.querySelector('.card-title').style.border = 'solid 1px black';
    }

    getElement('.cards-area ').append(cardItem);
});