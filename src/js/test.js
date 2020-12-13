const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}
console.log(refs.addFavoriteBtn);
//console.log('HI!');
refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);
function addFavoriteCard() { 
    console.log('HI!');
}
function removeFavoriteCard() { 
    console.log('---!');
}