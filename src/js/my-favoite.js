import myFavoriteTpt from '../templates/my-favorite.hbs';

const URL = 'https://callboard-backend.herokuapp.com';
async function fetchGetFavorites(){
const key = localStorage.getItem('key');
const options = {
    method: 'GET',
  headers: {
      
    Authorization: `"Bearer ${key}`,
  }, 
};
const response = await fetch(`${URL}/call/favourites`,options);
    const responseJson = await response.json();
    return responseJson;
}
fetchGetFavorites()
const showMyFavourites = document.querySelector('favor');
showMyFavourites.addEventListener('click', showFavouritesCards);

function showFavouritesCards(){
    fetchGetFavorites(URL).then(render => document.querySelector('.container').innerHTML = myFavoriteTpt( render.favourites))
}

