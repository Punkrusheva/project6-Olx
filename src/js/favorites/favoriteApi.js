import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

//Добавление в избранное POST/call/favourite/{callId}
export const addToFavorites = favoritesData => { 
    const { title, imageUrls, description,category, price, oldPrice, isOnSale,userId, _id} = favoritesData;
    return axios.post(`${BASE_URL}/call/favourite/`, {_id});
}

//Удаление из избранного DELETE/call/favourite/{callId}
export const removeFromFavorites = (_id) => {
    return axios.delete(`${BASE_URL}call/favourite/${_id}`)
}

//получение карточек избранных пользователя GET/call/favourites

export const getAllFavorites = () => { 
    return axios(`${BASE_URL}/call/favourites`);
}
