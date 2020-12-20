
import myAdsOwn from '../templates/cabinet.hbs';


const URL = 'https://callboard-backend.herokuapp.com';

async function fetchGetFavorites(){
const key = localStorage.getItem('key');
const options = {
    method: 'GET',
  headers: {
      
    Authorization: `Bearer ${key}`,
  }, 
};
const response = await fetch(`${URL}/call/own`,options);
    const responseJson = await response.json();
    return responseJson;
}
fetchGetFavorites()
const showMyFavourites = document.querySelector('.favor');
showMyFavourites.addEventListener('click', showFavouritesCards);

// function showFavouritesCards(){
//     fetchGetFavorites(URL).then(render => document.querySelector('.main-container').innerHTML = myFavoriteTpt( render.favourites))
// }
function showFavouritesCards(e) {
  fetchGetFavorites(URL).then(render => {
    if (render.favourites.length === 0) {
      const main = document.querySelector('.main-container')
     main.innerHTML = '<p>Ничего не найдено</p>'
    } else {
      document.querySelector('.container').innerHTML = myFavoriteTpt(render.favourites)
    }
  })
}
