const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}
console.log(refs.addFavoriteBtn);
//console.log('HI!');
refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);

function addFavoriteCard(e) { 
    const options = {
    method:'POST',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(favorite),
    };
    return fetch(`${BASE_URL}/call/favourite/{callId}?callId=${id}`, options)
        .then(response => response.json())
        //.then(console.log('HI!'))
    .then(renderAddFavoriteCard(id)) //можно рисовать .then(renderAddFavoriteCard)
    .catch(error => console.log('error', error));
}
function renderAddFavoriteCard(id){
    console.log('HI!');//refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id)) - этого элемента у меня пока нет
} 