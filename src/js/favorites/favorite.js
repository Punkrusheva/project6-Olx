import { addToFavorites, getAllFavorites } from "./favoriteApi";
import favoriteCardTpl from '../../templates/favorite-cards.hbs';

const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}

refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
//refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);

function addFavoriteCard() { 
    renderAddFavoriteCard()
}

function renderAddFavoriteCard() {
    addToFavorites()
        .then(response => {
            console.log(response.data);
        })
     //refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
    //refs.ELEMENT.innerHTML = файл hbs
}

function renderAllFavoriteCards() { 
    getAllFavorites.then(response => {
        console.log(response.data);
    })
}
/*
  
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
    .then(renderAddFavoriteCard(id)) //можно рисовать .then(renderAddFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderAddFavoriteCard(id){
     //refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
}

function removeFavoriteCard(e) { 
    const options = {
        method:'DELETE'  
    };
    return fetch(`${BASE_URL}/call/favourite/{callId}?callId=${id}`, options)
    .then(response => response.json())
    .then(renderRemoveFavoriteCard(id)) //можно рисовать .then(renderRemoveFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderRemoveFavoriteCard(id){
 //refs.ELEMENT.remove(id)
}

//получение избранных товаров пользователя
function getFavoriteCard(){
    return fetch(`${BASE_URL}/call/favourite/{callId}`)
    .then(response => response.json())
    .then(renderFavoriteCard(favorite)) //можно рисовать .then(renderFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderFavoriteCard(favorite){
//refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
}*/
