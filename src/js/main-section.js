// import { template } from 'handlebars';
import oneCard from '../templates/product-cards.hbs';
import allCategory from '../templates/all-category.hbs';
import oneCategory from '../templates/section-one-category.hbs';
import test from '../test.json';


const mainContainerRef = document.querySelector('.main-container');

// productCardGroupRef.insertAdjacentHTML('beforebegin', markup );

/* 4 катергории, по 4 (2) объявления  */ 
mainContainerRef.innerHTML = allCategory(test);

/* все объявления одной категории  */ 
// mainContainerRef.innerHTML = oneCategory(test);



/* API test  */
// const BASE_URL = 'https://callboard-backend.herokuapp.com';

// const newUser = {
//   "email": "user@example.com",
//   "password": "qwerty123"
// }

    
// const options = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"

//     },
//     body: JSON.stringify(newUser),
// };

// fetch(`${BASE_URL}/auth/register`).then(resp => resp.json()).then();

// const user = {
//   "email": "user@example.com",
//   "password": "qwerty123"
// }
// const options2 = {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };

// fetch(`${BASE_URL}/auth/login`, options2).then(resp => resp.json()).then(data => console.log(data.accessToken));;
    

// const BASE_URL = 'https://callboard-backend.herokuapp.com/';

// // регистрация

// async function addregisterUser() {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     };

//     const response = await fetch(`${BASE_URL}auth/register`, options);
//     const responseJson = await response.json();
//     return responseJson;
// }
  
// addregisterUser('spekava@gmail.com')
//   //авторизация
//   async function fetchAuthorisLogin(BASE_URL, dataRegistry) {
//     const options = {
//   method: 'POST',
//   body: JSON.stringify(dataRegistry),
//   headers: {
//     'Content-Type': 'application/json',
//     'accept': 'application/json',
//   },
// }
//     const response = await fetch(`${BASE_URL}auth/login`,options);
//     const responseJson = await response.json();
//     return  localStorage.setItem('key', `${responseJson.accessToken}`);

// };