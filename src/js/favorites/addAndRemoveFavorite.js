//import favoriteCardTpl from '../../templates/favorite-cards.hbs';
import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';
const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}
refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);


function removeFavoriteCard(e) { 
    e.preventDefault();
    removeFromFavorites()
    .then(renderRemoveFavoriteCard())
    .catch(error => console.log('error', error));
}
//Добавление в избранное POST/call/favourite/{callId}
const addToFavorites = (newFavorite) => { 
    const token = localStorage.getItem('key');
    const { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id } = newFavorite;
    return axios.post(`${BASE_URL}/call/favourite/{callId}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: {title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id},
    });
}
//Удаление из избранного DELETE/call/favourite/{callId}
const removeFromFavorites = (Favorite) => {
    const token = localStorage.getItem('key');
    const { title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id } = Favorite;
    return axios.delete(`${BASE_URL}call/favourite/{callId}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: {title, imageUrls, description, category, price, oldPrice, isOnSale, userId, _id},
    });
}

function renderAddFavoriteCard(){
     //refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
    //refs.ELEMENT.innerHTML = файл hbs
}



function renderRemoveFavoriteCard(){
 //refs.ELEMENT.remove()
}
function addFavoriteCard(e) { 
    e.preventDefault();
    const body = {};
    addToFavorites(body)
    .then(renderAddFavoriteCard())
    .catch(error => console.log('error', error));
}