const getElement = (e) => document.querySelector(e);
const getAll = (e) => document.querySelectorAll(e);

cards.map((card, index) => {
    let cardItem = getElement('.models .card-item').cloneNode(true);

    cardItem.setAttribute('data-key', index);
    cardItem.querySelector('.card-img-top').src = card.img;
    cardItem.querySelector('.card-img-top').alt = card.name;
    cardItem.querySelector('.card-title').innerHTML = card.name;
    cardItem.querySelector('.original-character').src  = card.original;
    cardItem.querySelector('.original-character').alt  = card.name;
    cardItem.querySelector('.original-character').title  = card.nameOriginal;

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

    getElement('.cards-area ').append(cardItem);
});