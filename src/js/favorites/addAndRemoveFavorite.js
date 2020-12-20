import favoriteCardTpl from '../../templates/favorite-cards.hbs';
import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';
const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}

//Добавление в избранное POST/call/favourite/{callId}

function onAddToFavoriteListener(){
    refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
}

function addFavoriteCard(e) { 
    e.preventDefault();
    const body = {};
    addToFavorites(body)
    .then(renderAddFavoriteCard())
    .catch(error => console.log('error', error));
}

const addToFavorites = (newFavorite) => { 
    const token = localStorage.getItem('key');
    const { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id } = newFavorite;
    const body = { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id };
    const headers = {
         authorization: `Bearer ${token}`
    }
    return axios.post(`${BASE_URL}/call/favourite/${_id}`, body, { headers });
}

function renderAddFavoriteCard(){
     //refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
    //refs.ELEMENT.innerHTML = файл hbs
}

//Удаление из избранного DELETE/call/favourite/{callId}
function onRemoveFromFavoriteListener(){
refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);
}

function removeFavoriteCard(e) { 
    e.preventDefault();
    removeFromFavorites()
    .then(renderRemoveFavoriteCard())
    .catch(error => console.log('error', error));
}

const removeFromFavorites = (Favorite) => {
    const token = localStorage.getItem('key');
    const { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id } = Favorite;
    const body = { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id };
    const headers = {
         authorization: `Bearer ${token}`
    }
    return axios.delete(`${BASE_URL}call/favourite/${_id}`, body, {headers});
}

function renderRemoveFavoriteCard(){
 //refs.ELEMENT.remove()
}
